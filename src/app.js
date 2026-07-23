const express = require('express');
const path = require('path');
const YAML = require('yamljs');
const swaggerUi = require('swagger-ui-express');

const routes = require('./routes');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Swagger / OpenAPI
const swaggerSpec = YAML.load(
  path.join(__dirname, '../openapi.yaml')
);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Rutas de la API
app.use(routes);

// Ruta principal
app.get('/', (req, res) => {
  res.json({
    message: 'Mini Blog API',
    version: '1.0.0',
    documentation: '/api-docs'
  });
});

// Middleware para rutas no encontradas
app.use((req, res) => {
  res.status(404).json({
    error: 'Ruta no encontrada'
  });
});

// Middleware de manejo de errores
app.use(errorHandler);

console.log(app._router.stack.map(layer => layer.route?.path || layer.name));

module.exports = app;