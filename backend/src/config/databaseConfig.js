const mongoose = require('mongoose');
const logger = require('../util/logger');
require('dotenv').config();

/**
 * Conecta la aplicación a la base de datos MongoDB.
 *
 * @async
 * @function connectToDatabase
 * @returns {Promise<void>}
 * @throws {Error} Si ocurre un error durante la conexión.
 *
 * @description
 * Esta función intenta establecer una conexión con la base de datos MongoDB
 * utilizando la URI proporcionada en las variables de entorno.
 * Si la conexión es exitosa, registra un mensaje de éxito.
 * Si ocurre un error, registra el error y termina el proceso.
 */
const connectToDatabase = async () => {
  try {
    logger.info('config/databaseConfig.js | Connecting to MongoDB...');

    await mongoose.connect(process.env.MONGO_URI, {});

    logger.info('config/databaseConfig.js | Connected to MongoDB');
  } catch (err) {
    logger.error(`config/databaseConfig.js | Error connecting to MongoDB: ${err.message}`);
    logger.debug(err.stack);

    process.exit(1);
  }
};

module.exports = connectToDatabase;
