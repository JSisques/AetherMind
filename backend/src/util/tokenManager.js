const jwt = require('jsonwebtoken');
const { JWT_SECRET, JWT_EXPIRES_IN } = require('../config/authConfig');

const tokenManager = {
  generateToken: user => {
    return jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
  },
};

module.exports = tokenManager;
