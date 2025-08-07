// backend/routes/addressRoutes.js
const express = require('express');
const { getAddressByPincode } = require('../controllers/addressController');
const router = express.Router();

router.get('/address-by-pincode/:pincode', getAddressByPincode);

module.exports = router;
