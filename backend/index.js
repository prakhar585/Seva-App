// backend/index.js
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const sevasRoutes = require('./routes/sevasRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/sevas', sevasRoutes);

app.get('/', (req, res) => {
  res.send('Seva Booking Backend is running');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
