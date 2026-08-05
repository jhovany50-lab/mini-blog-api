import service from '../services/authors.service.js';

const getAll = async (req, res, next) => {
  try {
    const data = await service.getAll();
    res.json(data);
  } catch (error) {
    next(error);
  }
};

const getById = async (req, res, next) => {
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

const getPostsByAuthor = async (req, res, next) => {
  try {
    const data = await service.getPostsByAuthor(req.params.id);

    res.json(data);

  } catch (error) {
    next(error);
  }
};

const create = async (req, res, next) => {
  try {

    const data = await service.create(req.body);

    res.status(201).json(data);

  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  try {

    const data = await service.update(
      req.params.id,
      req.body
    );

    if (!data) {
      throw { status: 404, message: 'Autor no encontrado' };
    }

    res.json(data);

  } catch (error) {
    next(error);
  }
};

const remove = async (req, res, next) => {
  try {

    const data = await service.remove(req.params.id);

    if (!data) {
      throw { status: 404, message: 'Autor no encontrado' };
    }

    res.json({
      message: 'Autor eliminado correctamente'
    });

  } catch (error) {
    next(error);
  }
};

export default {
  getAll,
  getById,
  getPostsByAuthor,
  create,
  update,
  remove
};