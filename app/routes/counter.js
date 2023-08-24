const express = require('express');
const router = express.Router();
const counterController = require('../controllers/counterController');

// Routes
router.post("/", counterController.count);
router.get("/status", counterController.getCount);

module.exports = router;