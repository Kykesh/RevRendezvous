const mongoose = require('mongoose');
const { Schema } = mongoose;

const eventSchema = new Schema({
  eventName: {
    type: String,
    required: true,
    trim: true
  },
  eventDescription: {
    type: String,
    required: true
  },
  eventDate: {
    type: Date,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  host: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  participants: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  ],
  eventFee: {
    type: Number,
    default: 0
  },
  isCharitable: {
    type: Boolean,
    default: false
  }
}, { collection: 'Events' });

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
