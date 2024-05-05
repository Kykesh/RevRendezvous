const User = require('../models/User');
const Event = require('../models/Event');

const resolvers = {
  Query: {
    getUsers: async () => await User.find({}),
    getEvents: async () => await Event.find({})
  },
  Mutation: {
    addUser: async (_, { username, email }) => {
      const newUser = new User({ username, email });
      await newUser.save();
      return newUser;
    }
  }
};

module.exports = resolvers;
