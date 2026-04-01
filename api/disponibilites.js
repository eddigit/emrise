const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.SUPABASE_URL || process.env.REACT_APP_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

module.exports = async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { logement_id } = req.query;

  if (!logement_id) {
    return res.status(400).json({ error: 'logement_id requis' });
  }

  try {
    const { data, error } = await supabase
      .from('disponibilites')
      .select('date_debut, date_fin, source')
      .eq('logement_id', logement_id)
      .gte('date_fin', new Date().toISOString().split('T')[0])
      .order('date_debut', { ascending: true });

    if (error) {
      console.error('Supabase error:', error);
      return res.status(500).json({ error: 'Erreur de récupération des disponibilités' });
    }

    return res.status(200).json({
      logement_id,
      dates_bloquees: data || []
    });
  } catch (err) {
    console.error('Disponibilites error:', err);
    return res.status(500).json({ error: 'Erreur interne du serveur' });
  }
};
