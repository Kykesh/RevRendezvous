const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const { authMiddleware } = require('./utils/auth');
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();

// Create a new instance of an Apollo server with the GraphQL schema
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => authMiddleware({ req }) // Use authMiddleware to inject user info
});

// Initialize Apollo server with Express application
const startApolloServer = async () => {
  await server.start();
  
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  // Serve up static assets (only necessary if your client is a SPA)
  if (process.env.NODE_ENV === 'production') {
    app.use('/static', express.static(path.join(__dirname, '../client/build/static')));
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../client/build/index.html'));
    });
  }

  // Apply the Apollo GraphQL middleware and set the path to /graphql
  app.use(server.getMiddleware({ path: '/graphql' }));

  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`🚀 Server is running on http://localhost:${PORT}${server.graphqlPath}`);
    });
  });
};

startApolloServer();