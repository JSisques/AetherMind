require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');

const swaggerMiddleware = require(`${__dirname}/src/config/swaggerConfig`);

const app = express();

var cors = require('cors');

// CORS
app.use(cors());
app.use(bodyParser.json());

// Swagger
swaggerMiddleware(app);

// Constante para la ruta de la API
const apiRootPath = process.env.API_PATH || '/api/v1';

// Routes

module.exports = app;
