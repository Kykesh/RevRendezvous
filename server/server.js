require('dotenv').config();
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { ApolloServerPluginCacheControl } = require('apollo-server-core');
const { responseCachePlugin } = require('apollo-server-plugin-response-cache');
const path = require('path');
const { authMiddleware } = require('./utils/auth');
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => authMiddleware({ req }),
  plugins: [
    responseCachePlugin(),
    ApolloServerPluginCacheControl({
      defaultMaxAge: 5, // seconds
    })
  ],
});

const startApolloServer = async () => {
  await server.start();
  
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  if (process.env.NODE_ENV === 'production') {
    app.use('/static', express.static(path.join(__dirname, '../client/src/static')));
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../client/index.html'));
    });
  }

  app.use(server.getMiddleware({ path: '/graphql' }));

  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`🚀 Server is running on http://localhost:${PORT}${server.graphqlPath}`);
    });
  });
};

startApolloServer();
