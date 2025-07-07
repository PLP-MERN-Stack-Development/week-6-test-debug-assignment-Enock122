const Bug = require('../models/Bug');

exports.createBug = async (req, res) => {
  try {
    const { title, description } = req.body;
    const newBug = await Bug.create({ title, description, status: 'open' });
    res.status(201).json(newBug);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create bug' });
  }
};
