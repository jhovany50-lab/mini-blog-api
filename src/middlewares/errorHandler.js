module.exports = (err, req, res, next) => {

  const status = err.status || 500;
  let message = err.message || 'Error interno del servidor';

  // Solo registrar en consola errores inesperados
  if (status >= 500) {
    console.error(err);
  }

  if (err.code === '23505') {
    message = 'El recurso ya existe';
  }

  if (err.code === '23503') {
    message = 'El recurso relacionado no existe';
  }

  if (process.env.NODE_ENV === 'production' && status === 500) {
    message = 'Error interno del servidor';
  }

  res.status(status).json({
    success: false,
    error: message
  });

};