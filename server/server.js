require("dotenv").config();
const express = require("express");
const http = require("http");
const cors = require("cors");
const mongoose = require("mongoose");
const { Server } = require("socket.io");

const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const adminRoutes = require("./routes/adminRoutes");
const websiteRoutes = require("./routes/websiteRoutes");
const trafficRoutes = require("./routes/trafficRoutes");
const errorHandler = require("./middlewares/errorHandler");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "*" }
});

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/public", websiteRoutes);
app.use("/api/traffic", trafficRoutes); // Legacy routes

// Error handling middleware
app.use(errorHandler);

require("./sockets/trafficSockets")(io);

connectDB();

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
