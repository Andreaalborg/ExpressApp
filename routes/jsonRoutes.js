const express = require('express');
const router = express.Router();
const jsonController = require('../controllers/jsonController');

// POST request to save text in JSON file
router.post('/', jsonController.saveText);

// GET request to retrieve text from JSON file
router.get('/', jsonController.getText);

module.exports = router;
