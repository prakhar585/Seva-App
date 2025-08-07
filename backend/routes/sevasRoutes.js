// backend/routes/sevasRoutes.js
const express = require('express');
const router = express.Router();
const { getAllSevas, getSevaByCode } = require('../controllers/sevasController');

router.get('/', getAllSevas);
router.get('/:code', getSevaByCode);

module.exports = router;
