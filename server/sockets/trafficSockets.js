const TrafficSignal = require("../models/TrafficSignal");
const LiveTraffic = require("../models/LiveTraffic");
const Alert = require("../models/Alerts");

module.exports = (io) => {
  io.on("connection", (socket) => {
    console.log("Client connected");

    // Live traffic updates
    socket.on("trafficData", async (data) => {
      try {
        const { signalId, vehicleCount } = data;
        const liveTraffic = await LiveTraffic.findOneAndUpdate(
          { signalId },
          { vehicleCount },
          { upsert: true, new: true }
        ).populate('signalId');

        // Determine congestion level
        let congestionLevel = 'low';
        if (vehicleCount > 50) congestionLevel = 'high';
        else if (vehicleCount > 20) congestionLevel = 'medium';

        // Update signal congestion
        await TrafficSignal.findByIdAndUpdate(signalId, { congestionLevel });

        // Emit updates
        io.emit("trafficUpdate", liveTraffic);
        io.emit("congestionUpdate", { signalId, congestionLevel });
      } catch (error) {
        console.error("Error updating traffic data:", error);
      }
    });

    // Admin signal changes
    socket.on("signalChange", async (data) => {
      try {
        const { signalId, timer, status } = data;
        const updatedSignal = await TrafficSignal.findByIdAndUpdate(
          signalId,
          { timer, status },
          { new: true }
        );

        io.emit("signalUpdate", updatedSignal);
      } catch (error) {
        console.error("Error updating signal:", error);
      }
    });

    // Vehicle count streaming
    socket.on("vehicleCount", (data) => {
      io.emit("vehicleCountUpdate", data);
    });

    // Alert broadcasting
    socket.on("newAlert", async (data) => {
      try {
        const alert = await Alert.create(data);
        io.emit("alertUpdate", alert);
      } catch (error) {
        console.error("Error creating alert:", error);
      }
    });

    socket.on("disconnect", () => {
      console.log("Client disconnected");
    });
  });
};
