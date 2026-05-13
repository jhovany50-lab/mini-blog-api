const service = require('../services/authors.service');
const { validateAuthor } = require('../utils/validators');

exports.getAll = async (req, res, next) => {
  try {
    const data = await service.getAll();
    res.json(data);
  } catch (error) {
    next(error);
  }
};

exports.getById = async (req, res, next) => {
  try {
    const data = await service.getById(req.params.id);

    if (!data) {
      throw { status: 404, message: 'Autor no encontrado' };
    }

    res.json(data);
  } catch (error) {
    next(error);
  }
};

exports.getPostsByAuthor = async (req, res, next) => {
  try {
    const data = await service.getPostsByAuthor(req.params.id);
    res.json(data);
  } catch (error) {
    next(error);
  }
};

exports.create = async (req, res, next) => {
  try {
    validateAuthor(req.body);

    const data = await service.create(req.body);

    res.status(201).json(data);
  } catch (error) {
    next(error);
  }
};

exports.update = async (req, res, next) => {
  try {
    validateAuthor(req.body);

    const data = await service.update(req.params.id, req.body);

    if (!data) {
      throw { status: 404, message: 'Autor no encontrado' };
    }

    res.json(data);
  } catch (error) {
    next(error);
  }
};

exports.remove = async (req, res, next) => {
  try {
    const data = await service.remove(req.params.id);

    if (!data) {
      throw { status: 404, message: 'Autor no encontrado' };
    }

    res.json({ message: 'Autor eliminado correctamente' });
  } catch (error) {
    next(error);
  }
};