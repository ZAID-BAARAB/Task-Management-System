//controllers/suthController.js

const supabase = require('../supabase/client');

exports.signup = async (req, res) => {
  const { email, password, fullname } = req.body;
  const { data, error } = await supabase.auth.signUp({ email, password, fullname });

  if (error) return res.status(400).json({ error: error.message });
  // data.user contains the newly created user
  res.status(201).json({ user: data.user });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) return res.status(401).json({ error: error.message });
  // data.session contains access & refresh tokens
  res.json({ session: data.session, user: data.user });
};
