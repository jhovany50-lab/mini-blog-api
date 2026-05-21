// utils/validators.js

// 🔹 Valida que un ID sea entero positivo válido
exports.validateId = (req, res, next) => {
  const { id, authorId } = req.params;

  const value = Number(id || authorId);

  if (!Number.isInteger(value) || value <= 0) {
    return res.status(400).json({
      error: 'ID inválido'
    });
  }

  next();
};

// 🔹 Valida creación y actualización de POST
exports.validatePost = (req, res, next) => {
  const { title, content, author_id } = req.body;

  // Campos requeridos
  if (!title || !content || !author_id) {
    return res.status(400).json({
      error: 'title, content y author_id son requeridos'
    });
  }

  
  if (
    typeof title !== 'string' ||
    typeof content !== 'string'
  ) {
    return res.status(400).json({
      error: 'title y content deben ser texto'
    });
  }

  // Evita strings vacíos o espacios
  if (
    !title.trim() ||
    !content.trim()
  ) {
    return res.status(400).json({
      error: 'title y content no pueden estar vacíos'
    });
  }

  // author_id válido
  const authorIdNumber = Number(author_id);

  if (
    !Number.isInteger(authorIdNumber) ||
    authorIdNumber <= 0
  ) {
    return res.status(400).json({
      error: 'author_id debe ser un número válido'
    });
  }

  next();
};

// 🔹 Valida creación y actualización de AUTHOR
exports.validateAuthor = (req, res, next) => {
  const { name, email } = req.body;

  // Campos requeridos
  if (!name || !email) {
    return res.status(400).json({
      error: 'name y email son requeridos'
    });
  }

  // Tipo de dato
  if (
    typeof name !== 'string' ||
    typeof email !== 'string'
  ) {
    return res.status(400).json({
      error: 'name y email deben ser texto'
    });
  }

  // Evita strings vacíos
  if (
    !name.trim() ||
    !email.trim()
  ) {
    return res.status(400).json({
      error: 'name y email no pueden estar vacíos'
    });
  }

  // Validación básica email
  if (!email.includes('@')) {
    return res.status(400).json({
      error: 'email inválido'
    });
  }

  next();
};