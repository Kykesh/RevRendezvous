const mongoose = require('mongoose');
const { Schema } = mongoose;

const paymentSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  eventId: {
    type: Schema.Types.ObjectId,
    ref: 'Event',
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  paymentStatus: {
    type: String,
    required: true,
    enum: ['pending', 'completed', 'failed'],
    default: 'pending'
  },
  paymentDate: {
    type: Date,
    default: Date.now
  }
}, { collection: 'Payments' });

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment;
