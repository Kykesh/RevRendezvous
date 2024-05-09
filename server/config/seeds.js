const db = require('./connection');
const { User, Event } = require('../models');
const revDB = require('./revDB');

db.once('open', async () => {
  await revDB('Event', 'events');
  await revDB('User', 'users');

  const users = await User.insertMany([
    {
      username: "RiderJoe",
      email: "joe@example.com",
      passwordHash: "hashed_password_joe",
      profileImage: "path/to/image_joe.jpg",
      motorcycleDetails: {
        type: "Cruiser",
        engineSize: "1200cc"
      },
      ridingExperience: "Intermediate",
      preferences: "Likes long rides"
    },
    {
      username: "MotoSally",
      email: "sally@example.com",
      passwordHash: "hashed_password_sally",
      profileImage: "path/to/image_sally.jpg",
      motorcycleDetails: {
        type: "Sport",
        engineSize: "1000cc"
      },
      ridingExperience: "Advanced",
      preferences: "Likes racing events"
    }
  ]);

  console.log('users seeded');

  const events = await Event.insertMany([
    {
      eventName: "Annual Charity Ride",
      eventDescription: "Join us for a ride to raise funds for local charities.",
      eventDate: new Date("2023-06-15T09:00:00Z"),
      location: "City Park",
      host: users[0]._id,
      participants: [users[0]._id, users[1]._id],
      eventFee: 10,
      isCharitable: true
    },
    {
      eventName: "Mountain Trail Challenge",
      eventDescription: "Test your skills on the challenging mountain trails.",
      eventDate: new Date("2023-07-20T09:00:00Z"),
      location: "Mountain Base Camp",
      host: users[1]._id,
      participants: [users[1]._id],
      eventFee: 15,
      isCharitable: false
    }
  ]);

  console.log('events seeded');

  process.exit();
});
