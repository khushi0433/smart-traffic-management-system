const Traffic = require("../models/traffic");

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