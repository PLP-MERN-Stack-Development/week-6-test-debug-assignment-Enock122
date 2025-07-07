const express = require('express');
const mongoose = require('mongoose');
const bugRoutes = require('./routes/bugs');
const app = express();

app.use(express.json());
app.use('/api', bugRoutes);

app.use((err, req, res, next) => {
  res.status(500).json({ error: 'Something went wrong' });
});

module.exports = app;
