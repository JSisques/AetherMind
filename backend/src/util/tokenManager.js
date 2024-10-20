const jwt = require('jsonwebtoken');
const { JWT_SECRET, JWT_EXPIRES_IN } = require('../config/authConfig');

const tokenManager = {
  /**
   * Genera un token JWT para un usuario.
   * @function generateToken
   * @param {Object} user - El objeto usuario para el cual se genera el token.
   * @param {string} user._id - El ID único del usuario.
   * @returns {string} El token JWT generado.
   */
  generateToken: user => {
    return jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
  },
};

module.exports = tokenManager;
