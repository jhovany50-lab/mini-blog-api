import express from 'express';

import controller from '../controllers/posts.controller.js';

import {
  validateId,
  validatePost
} from '../utils/validators.js';

const router = express.Router();

router.get('/', controller.getAll);

// PRIMERO la ruta específica
router.get('/author/:authorId', validateId, controller.getByAuthor);

// DESPUÉS la dinámica
router.get('/:id', validateId, controller.getById);

router.post('/', validatePost, controller.create);

router.put('/:id', validateId, controller.update);

router.delete('/:id', validateId, controller.remove);

export default router;