const { createClient } = require('@supabase/supabase-js');
const { Resend } = require('resend');

const supabase = createClient(
  process.env.SUPABASE_URL || process.env.REACT_APP_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const resend = new Resend(process.env.RESEND_API_KEY);
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'hugokorzec.pro@gmail.com';

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const {
      logement_id,
      prenom,
      nom,
      email,
      telephone,
      date_arrivee,
      date_depart,
      nb_voyageurs,
      message
    } = req.body;

    // Validation
    if (!logement_id || !prenom || !nom || !email || !date_arrivee || !date_depart) {
      return res.status(400).json({ error: 'Champs obligatoires manquants' });
    }

    if (new Date(date_arrivee) >= new Date(date_depart)) {
      return res.status(400).json({ error: 'La date de départ doit être après la date d\'arrivée' });
    }

    // Check availability (no overlap with disponibilites = blocked dates)
    const { data: conflicts } = await supabase
      .from('disponibilites')
      .select('*')
      .eq('logement_id', logement_id)
      .lt('date_debut', date_depart)
      .gt('date_fin', date_arrivee);

    if (conflicts && conflicts.length > 0) {
      return res.status(409).json({ error: 'Les dates sélectionnées ne sont pas disponibles' });
    }

    // Get logement info
    const { data: logement } = await supabase
      .from('logements')
      .select('nom, slug')
      .eq('id', logement_id)
      .single();

    if (!logement) {
      return res.status(404).json({ error: 'Logement introuvable' });
    }

    // Insert reservation
    const { data: reservation, error: insertError } = await supabase
      .from('reservations')
      .insert({
        logement_id,
        prenom,
        nom,
        email,
        telephone: telephone || null,
        date_arrivee,
        date_depart,
        nb_voyageurs: nb_voyageurs || 1,
        message: message || null,
        statut: 'en_attente'
      })
      .select('reference')
      .single();

    if (insertError) {
      console.error('Insert error:', insertError);
      return res.status(500).json({ error: 'Erreur lors de la création de la réservation' });
    }

    const ref = reservation.reference;
    const dateArriveeFormatted = formatDate(date_arrivee);
    const dateDepartFormatted = formatDate(date_depart);

    // Send confirmation email to traveler
    await resend.emails.send({
      from: 'EmiRise <noreply@emirise.fr>',
      to: email,
      subject: `Demande de réservation reçue — EmiRise (${ref})`,
      html: emailConfirmationVoyageur({
        prenom,
        nom,
        email,
        telephone,
        nom_logement: logement.nom,
        date_arrivee: dateArriveeFormatted,
        date_depart: dateDepartFormatted,
        nb_voyageurs: nb_voyageurs || 1,
        message,
        reference: ref
      })
    });

    // Send notification email to admin
    await resend.emails.send({
      from: 'EmiRise <noreply@emirise.fr>',
      to: ADMIN_EMAIL,
      subject: `Nouvelle demande — ${logement.nom} (${dateArriveeFormatted} → ${dateDepartFormatted})`,
      html: emailNotificationAdmin({
        prenom,
        nom,
        email,
        telephone,
        nom_logement: logement.nom,
        date_arrivee: dateArriveeFormatted,
        date_depart: dateDepartFormatted,
        nb_voyageurs: nb_voyageurs || 1,
        message,
        reference: ref
      })
    });

    return res.status(201).json({ success: true, reference: ref });
  } catch (err) {
    console.error('Reservation error:', err);
    return res.status(500).json({ error: 'Erreur interne du serveur' });
  }
};

function formatDate(dateStr) {
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
}

function emailConfirmationVoyageur({ prenom, nom, nom_logement, date_arrivee, date_depart, nb_voyageurs, reference }) {
  return `<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#FAF8F5;font-family:'Inter',Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;margin:0 auto;background:#FFFFFF;">
  <tr><td style="padding:40px 32px 24px;text-align:center;background:#2D2A26;">
    <h1 style="margin:0;font-family:'Georgia',serif;color:#C9A961;font-size:28px;letter-spacing:2px;">EmiRise</h1>
  </td></tr>
  <tr><td style="padding:40px 32px;">
    <h2 style="margin:0 0 24px;font-family:'Georgia',serif;color:#2D2A26;font-size:22px;">Bonjour ${prenom},</h2>
    <p style="margin:0 0 16px;color:#6B635A;font-size:15px;line-height:1.6;">
      Nous avons bien reçu votre demande de réservation. Notre équipe l'examine et reviendra vers vous dans les plus brefs délais.
    </p>
    <table width="100%" style="background:#FAF8F5;border-radius:8px;padding:24px;margin:24px 0;" cellpadding="0" cellspacing="0">
      <tr><td style="padding:8px 24px;">
        <p style="margin:0;color:#9A9189;font-size:12px;text-transform:uppercase;letter-spacing:1px;">Référence</p>
        <p style="margin:4px 0 0;color:#2D2A26;font-size:16px;font-weight:600;">${reference}</p>
      </td></tr>
      <tr><td style="padding:8px 24px;">
        <p style="margin:0;color:#9A9189;font-size:12px;text-transform:uppercase;letter-spacing:1px;">Logement</p>
        <p style="margin:4px 0 0;color:#2D2A26;font-size:16px;">${nom_logement}</p>
      </td></tr>
      <tr><td style="padding:8px 24px;">
        <p style="margin:0;color:#9A9189;font-size:12px;text-transform:uppercase;letter-spacing:1px;">Dates</p>
        <p style="margin:4px 0 0;color:#2D2A26;font-size:16px;">${date_arrivee} → ${date_depart}</p>
      </td></tr>
      <tr><td style="padding:8px 24px;">
        <p style="margin:0;color:#9A9189;font-size:12px;text-transform:uppercase;letter-spacing:1px;">Voyageurs</p>
        <p style="margin:4px 0 0;color:#2D2A26;font-size:16px;">${nb_voyageurs} voyageur${nb_voyageurs > 1 ? 's' : ''}</p>
      </td></tr>
    </table>
    <p style="margin:0 0 16px;color:#6B635A;font-size:15px;line-height:1.6;">
      Si vous avez des questions, n'hésitez pas à nous contacter à <a href="mailto:contact@emirise.fr" style="color:#C9A961;">contact@emirise.fr</a>.
    </p>
    <p style="margin:24px 0 0;color:#6B635A;font-size:15px;">À très bientôt en Provence,<br><strong style="color:#2D2A26;">L'équipe EmiRise</strong></p>
  </td></tr>
  <tr><td style="padding:24px 32px;text-align:center;background:#FAF8F5;border-top:1px solid #E8E0D5;">
    <p style="margin:0;color:#9A9189;font-size:12px;">EmiRise — Locations de prestige en Provence</p>
  </td></tr>
</table>
</body></html>`;
}

function emailNotificationAdmin({ prenom, nom, email, telephone, nom_logement, date_arrivee, date_depart, nb_voyageurs, message, reference }) {
  return `<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#FAF8F5;font-family:'Inter',Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;margin:0 auto;background:#FFFFFF;">
  <tr><td style="padding:40px 32px 24px;text-align:center;background:#2D2A26;">
    <h1 style="margin:0;font-family:'Georgia',serif;color:#C9A961;font-size:28px;letter-spacing:2px;">EmiRise</h1>
    <p style="margin:8px 0 0;color:#A69880;font-size:13px;">Notification administrateur</p>
  </td></tr>
  <tr><td style="padding:40px 32px;">
    <h2 style="margin:0 0 24px;font-family:'Georgia',serif;color:#2D2A26;font-size:22px;">Nouvelle demande de réservation</h2>
    <table width="100%" style="background:#FAF8F5;border-radius:8px;padding:24px;margin:0 0 24px;" cellpadding="0" cellspacing="0">
      <tr><td style="padding:8px 24px;">
        <p style="margin:0;color:#9A9189;font-size:12px;text-transform:uppercase;letter-spacing:1px;">Référence</p>
        <p style="margin:4px 0 0;color:#C9A961;font-size:18px;font-weight:700;">${reference}</p>
      </td></tr>
      <tr><td style="padding:8px 24px;">
        <p style="margin:0;color:#9A9189;font-size:12px;text-transform:uppercase;letter-spacing:1px;">Logement</p>
        <p style="margin:4px 0 0;color:#2D2A26;font-size:16px;font-weight:600;">${nom_logement}</p>
      </td></tr>
      <tr><td style="padding:8px 24px;">
        <p style="margin:0;color:#9A9189;font-size:12px;text-transform:uppercase;letter-spacing:1px;">Dates</p>
        <p style="margin:4px 0 0;color:#2D2A26;font-size:16px;">${date_arrivee} → ${date_depart}</p>
      </td></tr>
      <tr><td style="padding:8px 24px;">
        <p style="margin:0;color:#9A9189;font-size:12px;text-transform:uppercase;letter-spacing:1px;">Voyageurs</p>
        <p style="margin:4px 0 0;color:#2D2A26;font-size:16px;">${nb_voyageurs}</p>
      </td></tr>
    </table>
    <h3 style="margin:0 0 16px;color:#2D2A26;font-size:16px;">Coordonnées du voyageur</h3>
    <table width="100%" style="margin:0 0 24px;" cellpadding="0" cellspacing="0">
      <tr><td style="padding:4px 0;color:#6B635A;font-size:14px;"><strong>Nom :</strong> ${prenom} ${nom}</td></tr>
      <tr><td style="padding:4px 0;color:#6B635A;font-size:14px;"><strong>Email :</strong> <a href="mailto:${email}" style="color:#C9A961;">${email}</a></td></tr>
      ${telephone ? `<tr><td style="padding:4px 0;color:#6B635A;font-size:14px;"><strong>Téléphone :</strong> ${telephone}</td></tr>` : ''}
    </table>
    ${message ? `
    <h3 style="margin:0 0 12px;color:#2D2A26;font-size:16px;">Message</h3>
    <p style="margin:0 0 24px;color:#6B635A;font-size:14px;line-height:1.6;padding:16px;background:#FAF8F5;border-radius:8px;border-left:3px solid #C9A961;">${message}</p>
    ` : ''}
  </td></tr>
  <tr><td style="padding:24px 32px;text-align:center;background:#FAF8F5;border-top:1px solid #E8E0D5;">
    <p style="margin:0;color:#9A9189;font-size:12px;">EmiRise — Système de réservation</p>
  </td></tr>
</table>
</body></html>`;
}
