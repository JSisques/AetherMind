const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const path = require('path');

/**
 * Definición de la configuración de Swagger
 * @type {Object}
 */
const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'AetherMind API',
    version: '1.0.0',
    description: 'Documentación de la API de AetherMind',
  },
  components: {
    securitySchemes: {
      BearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
    },
  },
  security: [{ BearerAuth: [] }],
};

/**
 * Opciones para la configuración de Swagger
 * @type {Object}
 */
const options = {
  swaggerDefinition,
  apis: [path.join(__dirname, '../route/*js')],
};

/**
 * Especificación de Swagger generada
 * @type {Object}
 */
const swaggerSpec = swaggerJSDoc(options);

/**
 * Middleware para configurar Swagger en la aplicación
 * @param {Object} app - Instancia de la aplicación Express
 */
const swaggerMiddleware = app => {
  // Servimos la documentación de Swagger en la ruta '/docs'
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

module.exports = swaggerMiddleware;
