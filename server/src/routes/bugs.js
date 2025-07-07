const express = require('express');
const { createBug } = require('../controllers/bugController');
const router = express.Router();

router.post('/bugs', createBug);
module.exports = router;
