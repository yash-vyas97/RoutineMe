const express = require('express');
const router = express.Router();
const Habit = require('../models/Habit');

// Create a new habit
router.post('/', async (req, res) => {
  try {
    const habit = new Habit({ name: req.body.name });
    await habit.save();
    res.status(201).json(habit);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all habits
router.get('/', async (req, res) => {
  try {
    const habits = await Habit.find();
    res.json(habits);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
