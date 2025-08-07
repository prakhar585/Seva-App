// backend/routes/usersRoutes.js

const express = require('express');
const {
  checkIdentityExist,
  createUser,
  sendOtp,
  verifyOtp,
  getUserById
} = require('../controllers/usersController');

const router = express.Router();

router.get('/identity-exist', checkIdentityExist);
router.post('/', createUser);
router.post('/otp', sendOtp);
router.post('/otp-verify', verifyOtp);
router.get('/:id', getUserById);

module.exports = router;
