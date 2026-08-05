import express from 'express';

import postsRoutes from './posts.routes.js';
import authorsRoutes from './authors.routes.js';

const router = express.Router();

router.use('/posts', postsRoutes);
router.use('/authors', authorsRoutes);

export default router;