const Traffic = require("../models/traffic");
const TrafficSignal = require("../models/TrafficSignal");
const LiveTraffic = require("../models/LiveTraffic");
const Alert = require("../models/Alerts");

// Website APIs
exports.getLiveTrafficStatus = async (req, res) => {
  try {
    const signals = await TrafficSignal.find({ status: 'active' }).populate('liveTraffic');
    res.json(signals);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getPublicAlerts = async (req, res) => {
  try {
    const alerts = await Alert.find().populate('signalId', 'location').sort({ createdAt: -1 }).limit(10);
    res.json(alerts);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getRoadCongestion = async (req, res) => {
  try {
    const congestionData = await TrafficSignal.find({ status: 'active' }).select('location congestionLevel');
    res.json(congestionData);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getHealth = async (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
};

// Legacy functions (can be removed or kept for compatibility)
exports.addTrafficData = async (req, res) => {
  const { intersection, vehicleCount, avgSpeed } = req.body;

  const congestion =
    vehicleCount > 50 ? "High" :
    vehicleCount > 20 ? "Medium" : "Low";

  const record = await Traffic.create({
    intersection,
    vehicleCount,
    avgSpeed,
    congestion
  });

  res.json(record);
};

exports.getTrafficData = async (req, res) => {
  const data = await Traffic.find().sort({ timestamp: -1 });
  res.json(data);
};
