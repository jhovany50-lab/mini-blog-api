const errorHandler = (err, req, res, next) => {

  const status = err.status || 500;

  let message = err.message || 'Error interno del servidor';

  // Registrar únicamente errores inesperados
  if (status >= 500) {
    console.error(err);
  }

  // Errores conocidos de PostgreSQL
  if (err.code === '23505') {
    message = 'El recurso ya existe';
  }

  if (err.code === '23503') {
    message = 'El recurso relacionado no existe';
  }

  // Ocultar detalles internos en producción
  if (process.env.NODE_ENV === 'production' && status === 500) {
    message = 'Error interno del servidor';
  }

  res.status(status).json({
    success: false,
    status,
    error: message,
    method: req.method,
    path: req.originalUrl,
    timestamp: new Date().toISOString()
  });

};

export default errorHandler;