const express = require('express');
const pool = require('./db');

const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const postsRoutes = require('./routes/posts.routes');
const authorsRoutes = require('./routes/authors.routes');

const app = express();

app.use(express.json());

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Mini Blog API',
      version: '1.0.0',
      description: 'API de autores y posts'
    },
    servers: [
      {
        url: 'http://localhost:3000'
      }
    ]
  },
  apis: ['./src/**/*.js']
};

const swaggerSpec = swaggerJsdoc(options);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

/* =========================
   ROUTES
========================= */

app.use('/authors', authorsRoutes);
app.use('/posts', postsRoutes);

/* =========================
   BASE
========================= */

app.get('/', (req, res) => {
  res.send('API funcionando 🚀');
});

app.get('/db-test', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error en DB');
  }
});

module.exports = app;