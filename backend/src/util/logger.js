const winston = require('winston');
const { format, transports } = winston;
const path = require('path');
const fs = require('fs');
const DailyRotateFile = require('winston-daily-rotate-file');

/**
 * Configura y crea el directorio de logs si no existe.
 */
const logDirectory = path.join(__dirname, '../../logs');
if (!fs.existsSync(logDirectory)) {
  fs.mkdirSync(logDirectory);
}

/**
 * Define un formato personalizado para los mensajes de log.
 * @param {Object} info - Objeto con información del log.
 * @param {string} info.level - Nivel del log.
 * @param {string} info.message - Mensaje del log.
 * @param {string} info.timestamp - Marca de tiempo del log.
 * @returns {string} Mensaje de log formateado.
 */
const customFormat = format.printf(({ level, message, timestamp }) => {
  return `${timestamp} [${level}]: ${message}`;
});

/**
 * Configura y crea una instancia del logger de Winston.
 * @type {winston.Logger}
 */
const logger = winston.createLogger({
  level: 'debug',
  format: format.combine(
    format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss',
    }),
    customFormat,
  ),
  transports: [
    new transports.Console(),
    new DailyRotateFile({
      filename: path.join(logDirectory, '%DATE%.log'),
      datePattern: 'YYYY-MM-DD',
      maxSize: '5m',
      maxFiles: '30d',
    }),
  ],
});

module.exports = logger;
