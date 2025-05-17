const mongoose = require('mongoose');

const HabitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  completedDates: [Date]
}, { timestamps: true });

module.exports = mongoose.model('Habit', HabitSchema);
