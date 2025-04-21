// controllers/taskController.js
const supabase = require('../supabase/client');

exports.getTasks = async (req, res) => {
  const userId = req.query.userId;
  const { data, error } = await supabase
    .from('tasks')
    .select('*')
    .eq('user_id', userId)
    .order('priority', { ascending: true });

  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
};

exports.createTask = async (req, res) => {
    const { title, duedate, description, status, priority, category_id, user_id } = req.body;
    const { data, error } = await supabase
      .from('tasks')
      .insert(
        [{ title, duedate, description, status, priority, category_id, user_id }],
        { returning: 'representation' } // 👈 add this here!
      )
      .single();
  
    if (error) return res.status(400).json({ error: error.message });
    res.status(201).json(data);
  };
  

// exports.createTask = async (req, res) => {
//   const { title, description, status, priority, category_id, user_id } = req.body;
//   const { data, error } = await supabase
//     .from('tasks')
//     .insert([{ title, description, status, priority, category_id, user_id }])
//     .single();

//   if (error) return res.status(400).json({ error: error.message });
//   res.status(201).json(data);
// };

exports.updateTask = async (req, res) => {
  const { id } = req.params;
  const updates = req.body; // e.g. { status: 'done', priority: 2, … }
  const { data, error } = await supabase
    .from('tasks')
    .update(updates)
    .eq('id', id)
    .single();

  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
};

exports.deleteTask = async (req, res) => {
  const { id } = req.params;
  const { error } = await supabase
    .from('tasks')
    .delete()
    .eq('id', id);

  if (error) return res.status(400).json({ error: error.message });
  res.json({ message: 'Task deleted' });
};

