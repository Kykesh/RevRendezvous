const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    email: String!
    events: [Event!]
  }

  type Event {
    id: ID!
    title: String!
    description: String!
    date: String!
    attendees: [User!]
  }

  type Query {
    getUsers: [User]
    getEvents: [Event]
  }

  type Mutation {
    addUser(username: String!, email: String!): User
  }
`;

module.exports = typeDefs;
