// backend/routes/sevasRoutes.js
const express = require('express');
const router = express.Router();
const { getAllSevas } = require('../controllers/sevasController');

router.get('/', getAllSevas);

module.exports = router;
