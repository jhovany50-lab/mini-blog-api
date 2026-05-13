// utils/validators.js

// 🔹 Valida que un ID sea número válido
exports.validateId = (req, res, next) => {
  const { id, authorId } = req.params;

  const value = id || authorId;

  if (!value || isNaN(value)) {
    return res.status(400).json({
      error: 'ID inválido'
    });
  }

  next();
};

// 🔹 Valida creación de POST
exports.validatePost = (req, res, next) => {
  const { title, content, author_id } = req.body;

  if (!title || !content || !author_id) {
    return res.status(400).json({
      error: 'title, content y author_id son requeridos'
    });
  }

  if (typeof title !== 'string' || typeof content !== 'string') {
    return res.status(400).json({
      error: 'title y content deben ser texto'
    });
  }

  if (isNaN(author_id)) {
    return res.status(400).json({
      error: 'author_id debe ser número'
    });
  }

  next();
};

// 🔹 Valida creación de AUTHOR
exports.validateAuthor = (req, res, next) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({
      error: 'name y email son requeridos'
    });
  }

  if (typeof name !== 'string') {
    return res.status(400).json({
      error: 'name debe ser texto'
    });
  }

  if (!email.includes('@')) {
    return res.status(400).json({
      error: 'email inválido'
    });
  }

  next();
};