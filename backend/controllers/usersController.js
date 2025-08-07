// backend/controllers/usersController.js

const {users} = require("../data/users");

const checkIdentityExist = (req, res) => {
 const contact = req.query.contact;

  console.log("🔍 Checking for contact:", contact);
  console.log("👥 Current users:", users);

  const userExists = users.some(user => String(user.contact) === String(contact));
  res.status(200).json({ exists: userExists });
};

const createUser = (req, res) => {
  const { name, contact, email } = req.body;

  const newUser = {
    id: users.length + 1,
    name,
    contact,
    email,
    otp: "123456" // mock
  };

  users.push(newUser);

  res.status(201).json({ message: "User created", userId: newUser.id });
};

const sendOtp = (req, res) => {
  const { contact } = req.body;

  // mock sending OTP
  res.status(200).json({ message: `OTP sent to ${contact}` });
};

const verifyOtp = (req, res) => {
  const { contact, otp } = req.body;

  const user = users.find(u => u.contact === contact);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  if (user.otp !== otp) {
    return res.status(400).json({ message: "Invalid OTP" });
  }

  res.status(200).json({ message: "OTP verified", userId: user.id });
};

const getUserById = (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.status(200).json(user);
};

module.exports = {
  checkIdentityExist,
  createUser,
  sendOtp,
  verifyOtp,
  getUserById
};
