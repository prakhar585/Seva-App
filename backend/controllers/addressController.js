// backend/controllers/addressController.js
const pincodeData = require("../data/pincodes");

const getAddressByPincode = (req, res) => {
  const { pincode } = req.params;

  const result = pincodeData[pincode];

  if (!result) {
    return res.status(404).json({ message: "Invalid Pincode" });
  }

  res.status(200).json(result); // { city: "...", state: "..." }
};

module.exports = { getAddressByPincode };
