import service from '../services/posts.service.js';

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
      throw { status: 404, message: 'Post no encontrado' };
    }

    res.json(data);
  } catch (error) {
    next(error);
  }
};

const getByAuthor = async (req, res, next) => {
  try {
    const data = await service.getByAuthor(req.params.authorId);
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
    const data = await service.update(req.params.id, req.body);

    if (!data) {
      throw { status: 404, message: 'Post no encontrado' };
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
      throw { status: 404, message: 'Post no encontrado' };
    }

    res.json({
      message: 'Post eliminado correctamente'
    });
  } catch (error) {
    next(error);
  }
};

export default {
  getAll,
  getById,
  getByAuthor,
  create,
  update,
  remove
};