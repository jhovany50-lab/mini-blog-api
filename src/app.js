import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import YAML from 'yamljs';
import swaggerUi from 'swagger-ui-express';

import routes from './routes/index.js';
import errorHandler from './middlewares/errorHandler.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

export default app;