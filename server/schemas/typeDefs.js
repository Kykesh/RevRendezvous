const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    profileImage: String
    motorcycleDetails: MotorcycleDetails
    ridingExperience: String
    preferences: String
    payments: [Payment]
  }

  type MotorcycleDetails {
    type: String
    engineSize: String
  }

  type Event {
    _id: ID
    eventName: String
    eventDescription: String
    eventDate: String
    location: String
    host: User
    participants: [User]
    eventFee: Float
    isCharitable: Boolean
  }

  type Payment {
    _id: ID
    userId: User
    eventId: Event
    amount: Float
    paymentStatus: String
    paymentDate: String
  }

  type Notification {
    _id: ID
    recipient: User
    message: String
    dateSent: String
    eventType: String
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    users: [User]
    user(_id: ID!): User
    events: [Event]
    event(_id: ID!): Event
    payments: [Payment]
    payment(_id: ID!): Payment
    notifications: [Notification]
    notification(_id: ID!): Notification
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addEvent(eventName: String!, eventDescription: String!, eventDate: String!, location: String!, hostId: ID!, eventFee: Float, isCharitable: Boolean): Event
    updateEvent(_id: ID!, eventName: String, eventDescription: String, eventDate: String, location: String, eventFee: Float, isCharitable: Boolean): Event
    registerForEvent(eventId: ID!, userId: ID!): Event
    addPayment(userId: ID!, eventId: ID!, amount: Float): Payment
    addNotification(recipientId: ID!, message: String!, eventType: String!): Notification
  }
`;

module.exports = typeDefs;
