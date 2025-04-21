// routes/taskRoutes.js
const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

// List tasks for a user:  GET /api/tasks?userId=...
router.get('/', taskController.getTasks);

// Create a new task
router.post('/', taskController.createTask);

// Update an existing task
router.put('/:id', taskController.updateTask);

// Delete a task
router.delete('/:id', taskController.deleteTask);

module.exports = router;
