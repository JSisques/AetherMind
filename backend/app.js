require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');

const swaggerMiddleware = require('./src/config/swaggerConfig');

const app = express();

var cors = require('cors');

// CORS
app.use(cors());
app.use(bodyParser.json());

// Swagger
swaggerMiddleware(app);

// Constant for the API path
const apiRootPath = process.env.API_PATH || '/api/v1';

// Routes
const projectRouter = require('./src/route/projectRouter');

// Use routes
app.use(apiRootPath, projectRouter);

module.exports = app;
