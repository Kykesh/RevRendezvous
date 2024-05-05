const jwt = require('jsonwebtoken');
const secret = 'your_secret_key'; 
const expiration = '2h';

module.exports = {
  authMiddleware: ({ req }) => {
    let token = req.headers.authorization || '';
    token = token.split(' ').pop().trim();

    if (!token) {
      return req;
    }

    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log('Invalid token');
    }

    return req;
  },
  signToken: function({ username, email, id }) {
    const payload = { username, email, id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  }
};
