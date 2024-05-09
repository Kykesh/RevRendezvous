const { User, Event, Payment, Notification } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return await User.find({});
    },
    user: async (parent, { _id }, context) => {
      if (context.user) {
        return await User.findById(_id);
      }
      throw new AuthenticationError('Not authenticated');
    },
    events: async () => {
      return await Event.find({});
    },
    event: async (parent, { _id }) => {
      return await Event.findById(_id).populate('host participants');
    },
    payments: async () => {
      return await Payment.find({});
    },
    payment: async (parent, { _id }) => {
      return await Payment.findById(_id).populate('userId eventId');
    },
    notifications: async () => {
      return await Notification.find({});
    },
    notification: async (parent, { _id }) => {
      return await Notification.findById(_id).populate('recipient');
    }
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError('No user found with this email');
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError('Incorrect password');
      }
      const token = signToken(user);
      return { token, user };
    },
    addEvent: async (parent, args, context) => {
      if (context.user) {
        args.host = context.user._id;  // Automatically set the host to the current user
        const event = new Event(args);
        await event.save();
        return event;
      }
      throw new AuthenticationError('You need to be logged in to create an event');
    },
    registerForEvent: async (parent, { eventId, userId }) => {
      const event = await Event.findById(eventId);
      if (!event.participants.includes(userId)) {
        event.participants.push(userId);
        await event.save();
      }
      return event;
    },
    addPayment: async (parent, { userId, eventId, amount }) => {
      const payment = new Payment({ userId, eventId, amount });
      await payment.save();
      return payment;
    },
    addNotification: async (parent, { recipientId, message, eventType }) => {
      const notification = new Notification({ recipient: recipientId, message, eventType });
      await notification.save();
      return notification;
    }
  }
};

module.exports = resolvers;
