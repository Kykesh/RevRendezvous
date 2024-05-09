const mongoose = require('mongoose');
const { Schema } = mongoose;

const notificationSchema = new Schema({
  recipient: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  message: {
    type: String,
    required: true
  },
  dateSent: {
    type: Date,
    default: Date.now
  },
  eventType: {
    type: String,
    required: true,
    enum: ['event reminder', 'new event', 'event update', 'general notice']
  }
}, { collection: 'Notifications' });

// Indexing the recipient field for faster query performance
notificationSchema.index({ recipient: 1 });

const Notification = mongoose.model('Notification', notificationSchema);

module.exports = Notification;
