const service = require('../services/authors.service');
const postsService = require('../services/posts.service');

exports.getAll = async (req, res) => {
  const data = await service.getAll();
  res.json(data);
};

exports.getById = async (req, res) => {
  const data = await service.getById(req.params.id);
  if (!data) return res.status(404).send('No encontrado');
  res.json(data);
};

exports.create = async (req, res) => {
  const data = await service.create(req.body);
  res.status(201).json(data);
};

exports.update = async (req, res) => {
  const data = await service.update(req.params.id, req.body);
  if (!data) return res.status(404).send('No encontrado');
  res.json(data);
};

exports.remove = async (req, res) => {
  const data = await service.remove(req.params.id);
  if (!data) return res.status(404).send('No encontrado');
  res.send('Eliminado');
};

/* 🔥 ESTE ES EL NUEVO */
exports.getPostsByAuthor = async (req, res) => {
  try {
    const authorId = req.params.id;
    const posts = await postsService.getByAuthor(authorId);
    res.json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error obteniendo posts del autor');
  }
};