// backend/controllers/sevasController.js
const sevas = require('../data/sevas');

const getAllSevas = (req, res) => {
  res.status(200).json(sevas);
};

const getSevaByCode = (req, res) => {
  const { code } = req.params;
  const seva = sevas.find(s => s.code === code);

  if (!seva) {
    return res.status(404).json({ message: 'Seva not found' });
  }

  res.status(200).json(seva);
};

module.exports = {
  getAllSevas,
  getSevaByCode
};
