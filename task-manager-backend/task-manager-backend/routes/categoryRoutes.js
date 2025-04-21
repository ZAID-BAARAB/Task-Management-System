// routes/categoryRoutes.js
const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

// List categories for a user: GET /api/categories?userId=...
router.get('/', categoryController.getCategories);

// Create a new category
router.post('/', categoryController.createCategory);

// Update a category name
router.put('/:id', categoryController.updateCategory);

// Delete a category
router.delete('/:id', categoryController.deleteCategory);

module.exports = router;
