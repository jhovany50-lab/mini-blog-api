const express = require('express');
const router = express.Router();

const postsRoutes = require('./posts.routes');
const authorsRoutes = require('./authors.routes');

router.use('/posts', postsRoutes);
router.use('/authors', authorsRoutes);

module.exports = router;