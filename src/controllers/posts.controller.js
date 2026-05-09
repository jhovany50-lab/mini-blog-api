const service = require('../services/posts.service');

// Obtener todos los posts
exports.getAll = async (req, res) => {
  try {
    const data = await service.getAll();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error obteniendo posts');
  }
};

// Obtener post por ID
exports.getById = async (req, res) => {
  try {
    const data = await service.getById(req.params.id);
    if (!data) return res.status(404).send('No encontrado');
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error obteniendo post');
  }
};

// Obtener posts por author
exports.getByAuthor = async (req, res) => {
  try {
    const data = await service.getByAuthor(req.params.authorId);
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error obteniendo posts del author');
  }
};

// Crear post
exports.create = async (req, res) => {
  try {
    const { title, content, author_id } = req.body;

    if (!title || !content || !author_id) {
      return res.status(400).send('Campos requeridos');
    }

    const data = await service.create(req.body);

    res.status(201).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error creando post');
  }
};

// Actualizar post
exports.update = async (req, res) => {
  try {
    const data = await service.update(req.params.id, req.body);
    if (!data) return res.status(404).send('No encontrado');
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error actualizando post');
  }
};

// Eliminar post
exports.remove = async (req, res) => {
  try {
    const data = await service.remove(req.params.id);
    if (!data) return res.status(404).send('No encontrado');
    res.send('Eliminado');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error eliminando post');
  }
};