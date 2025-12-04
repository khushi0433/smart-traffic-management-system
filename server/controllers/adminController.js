const TrafficSignal = require('../models/TrafficSignal');
const LiveTraffic = require('../models/LiveTraffic');
const Alert = require('../models/Alerts');
const User = require('../models/User');

exports.getAllSignals = async (req, res) => {
  try {
    const signals = await TrafficSignal.find();
    res.json(signals);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.updateSignal = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    const signal = await TrafficSignal.findByIdAndUpdate(id, updates, { new: true });
    if (!signal) {
      return res.status(404).json({ message: 'Signal not found' });
    }
    res.json(signal);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getLiveCongestion = async (req, res) => {
  try {
    const congestion = await TrafficSignal.find({ status: 'active' }).select('location congestionLevel');
    res.json(congestion);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getAlerts = async (req, res) => {
  try {
    const alerts = await Alert.find().populate('signalId', 'location').sort({ createdAt: -1 });
    res.json(alerts);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getAnalytics = async (req, res) => {
  try {
    // Simple analytics - can be expanded
    const totalSignals = await TrafficSignal.countDocuments();
    const activeSignals = await TrafficSignal.countDocuments({ status: 'active' });
    const alertsCount = await Alert.countDocuments();
    const highCongestion = await TrafficSignal.countDocuments({ congestionLevel: 'high' });

    res.json({
      totalSignals,
      activeSignals,
      alertsCount,
      highCongestion
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find().select('-password');
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.createUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const user = new User({ name, email, password, role });
    await user.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.exportReports = async (req, res) => {
  try {
    // Simple JSON export - can be expanded to CSV
    const signals = await TrafficSignal.find();
    const alerts = await Alert.find();
    const report = {
      signals,
      alerts,
      generatedAt: new Date()
    };
    res.json(report);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
