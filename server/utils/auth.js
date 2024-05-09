const jwt = require('jsonwebtoken');
const { AuthenticationError } = require('apollo-server-express');

const secret = 'itcouldbeasecret';
const expiration = '2h';

module.exports = {
  // Middleware for working with the incoming HTTP requests
  authMiddleware: function ({ req }) {
    // Token may be sent via req.body, req.query, or headers
    let token = req.body.token || req.query.token || req.headers.authorization;

    // ["Bearer", "<tokenvalue>"]
    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    if (!token) {
      return req;
    }

    try {
      // Attempt to verify token and get data
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log('Invalid token');
    }

    return req;
  },

  // Function for signing tokens
  signToken: function ({ username, email, _id }) {
    const payload = { username, email, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },

  // Custom error handler for authentication issues
  AuthenticationError: () => new AuthenticationError('Could not authenticate user.')
};
