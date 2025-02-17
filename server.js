// server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const newsRoutes = require('./routes/news');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/news', newsRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to the News API Backend');
});

const PORT = process.env.PORT || 5002;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
