const express = require('express');
const router = express.Router();
const counterController = require('../controllers/counterController');

// Routes
router.post("/", counterController.count);

module.exports = router;