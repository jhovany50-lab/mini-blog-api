const express = require('express');
const router = express.Router();

const controller = require('../controllers/authors.controller');

const {
  validateId,
  validateAuthor
} = require('../utils/validators');

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

module.exports = router;