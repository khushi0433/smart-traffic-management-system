# TODO List for Smart Traffic Management System Backend

## 1. Update Dependencies
- [ ] Add missing dependencies to package.json: bcryptjs, jsonwebtoken, express-validator

## 2. Create Database Models
- [ ] Create User model (name, email, password, role)
- [ ] Create TrafficSignal model (location, status, timer, congestionLevel)
- [ ] Create LiveTraffic model (signalId, vehicleCount, updatedAt)
- [ ] Create Alerts model (signalId, message, severity)
- [ ] Create Reports model (dailyAvg, peakHours, stats)

## 3. Create Middleware
- [ ] Create auth.js (JWT verification, role-based access)
- [ ] Create errorHandler.js (centralized error handling)
- [ ] Create validation.js (input validation using express-validator)

## 4. Create Authentication System
- [ ] Create authController.js (register, login)
- [ ] Create authRoutes.js (register, login routes)

## 5. Expand Controllers
- [ ] Expand trafficController.js for website APIs (live status, public alerts, congestion, health)
- [ ] Create adminController.js for admin APIs (get signals, update timers/status, alerts, analytics, manage users, export reports)

## 6. Create Routes
- [ ] Create adminRoutes.js
- [ ] Create websiteRoutes.js
- [ ] Update trafficRoutes.js if needed

## 7. Update Server Setup
- [ ] Update server.js to include all routes and middleware

## 8. Enhance Socket.io
- [ ] Enhance trafficSockets.js for real-time features (live updates, admin changes, vehicle count, signal broadcasting)

## 9. Create Utilities
- [ ] Create seed.js for demo data

## 10. Configuration Files
- [ ] Create .env.example with required variables

## 11. Documentation
- [ ] Write README.md with instructions, API list, database schema, Socket.io setup

## 12. Testing and Finalization
- [ ] Install dependencies
- [ ] Run seed data
- [ ] Test APIs with Postman
- [ ] Ensure CORS and environment config
