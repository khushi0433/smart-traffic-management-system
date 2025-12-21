const express = require('express');
const router = express.Router();
const {
  createSubscription,
  getSubscription,
  cancelSubscription,
  updateSubscription,
  getPaymentHistory,
  handlePayPalWebhook
} = require('../controllers/subscriptionController');
const { auth } = require('../middlewares/auth');

// Protected routes (require authentication)
router.post('/create', auth, createSubscription);
router.get('/current', auth, getSubscription);
router.post('/cancel', auth, cancelSubscription);
router.put('/update', auth, updateSubscription);
router.get('/payment-history', auth, getPaymentHistory);

// Webhook route (no auth, verified by PayPal signature)
router.post('/webhook/paypal', handlePayPalWebhook);

module.exports = router;