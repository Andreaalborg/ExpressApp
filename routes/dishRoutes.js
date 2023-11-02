const express = require('express');
const router = express.Router();
const dishController = require('../controllers/dishController');

// POST request to add a new dish
router.post('/', dishController.addDish);

// GET request to get all dishes
router.get('/', dishController.getAllDishes);

// GET request to get a single dish by key
router.get('/:dishKey', dishController.getDish);

module.exports = router;
