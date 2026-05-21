const express = require('express');
const pool = require('./db');

const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const path = require('path');

const routes = require('./routes');

const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(express.json());

const swaggerSpec = YAML.load(
  path.join(__dirname, '../openapi.yaml')
);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(routes);

app.get('/', (req, res) => {
  res.send('API funcionando 🚀');
});

app.get('/db-test', async (req, res, next) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json(result.rows);
  } catch (error) {
    next(error);
  }
});

app.use(errorHandler);

module.exports = app;