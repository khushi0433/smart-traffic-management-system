const Traffic = require("../models/traffic");

module.exports = (io) => {
  io.on("connection", (socket) => {
    console.log("Client connected");

    socket.on("trafficData", async (data) => {
      const saved = await Traffic.create(data);
      io.emit("trafficUpdate", saved);
    });
  });
};