// controllers/categoryController.js
const supabase = require('../supabase/client');

exports.getCategories = async (req, res) => {
  const userId = req.query.userId;
  const { data, error } = await supabase
    .from('categories')
    .select('*')
    .eq('user_id', userId);

  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
};

exports.createCategory = async (req, res) => {
  const { name, user_id } = req.body;
  const { data, error } = await supabase
    .from('categories')
    .insert([{ name, user_id }])
    .single();

  if (error) return res.status(400).json({ error: error.message });
  res.status(201).json(data);
};

exports.updateCategory = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const { data, error } = await supabase
    .from('categories')
    .update({ name })
    .eq('id', id)
    .single();

  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
};

exports.deleteCategory = async (req, res) => {
  const { id } = req.params;
  const { error } = await supabase
    .from('categories')
    .delete()
    .eq('id', id);

  if (error) return res.status(400).json({ error: error.message });
  res.json({ message: 'Category deleted' });
};
