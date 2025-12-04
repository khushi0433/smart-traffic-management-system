const mongoose = require('mongoose');

const trafficSignalSchema = new mongoose.Schema({
  location: {
    type: String,
    required: true,
    trim: true
  },
  status: {
    type: String,
    enum: ['active', 'inactive', 'maintenance'],
    default: 'active'
  },
  timer: {
    type: Number, // in seconds
    default: 60
  },
  congestionLevel: {
    type: String,
    enum: ['low', 'medium', 'high'],
    default: 'low'
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('TrafficSignal', trafficSignalSchema);
