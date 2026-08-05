import express from 'express';

import controller from '../controllers/authors.controller.js';

import {
  validateId,
  validateAuthor
} from '../utils/validators.js';

const router = express.Router();

router.get('/', controller.getAll);

router.get('/:id', validateId, controller.getById);

router.get('/:id/posts', validateId, controller.getPostsByAuthor);

router.post(
  '/',
  validateAuthor,
  controller.create
);

router.put(
  '/:id',
  validateId,
  validateAuthor,
  controller.update
);

router.delete('/:id', validateId, controller.remove);

export default router;