const express = require('express');
const router = express.Router();

const controller = require('../controllers/posts.controller');
const {
  validateId,
  validatePost
} = require('../utils/validators');

router.get('/', controller.getAll);
router.get('/:id', validateId, controller.getById);
router.get('/author/:authorId', validateId, controller.getByAuthor);

router.post('/', validatePost, controller.create);

router.put('/:id', validateId, controller.update);

router.delete('/:id', validateId, controller.remove);

module.exports = router;