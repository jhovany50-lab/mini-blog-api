import express from 'express';

import { swaggerUi, swaggerSpec } from './docs/swagger.js';

import routes from './routes/index.js';
import errorHandler from './middlewares/errorHandler.js';

const app = express();

// Middleware para parsear JSON
app.use(express.json());

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

export default app;