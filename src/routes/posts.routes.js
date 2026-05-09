const express = require('express');
const router = express.Router();
const controller = require('../controllers/posts.controller');

/**
 * @swagger
 * /posts:
 *   get:
 *     summary: Obtener todos los posts
 *     tags: [Posts]
 *     responses:
 *       200:
 *         description: Lista de posts
 */
router.get('/', controller.getAll);

/**
 * @swagger
 * /posts/author/{authorId}:
 *   get:
 *     summary: Obtener posts por autor
 *     tags: [Posts]
 *     parameters:
 *       - in: path
 *         name: authorId
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Lista de posts del autor
 */
router.get('/author/:authorId', controller.getByAuthor);

/**
 * @swagger
 * /posts/{id}:
 *   get:
 *     summary: Obtener un post por ID
 *     tags: [Posts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Post encontrado
 *       404:
 *         description: No encontrado
 */
router.get('/:id', controller.getById);

/**
 * @swagger
 * /posts:
 *   post:
 *     summary: Crear un nuevo post
 *     tags: [Posts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *               author_id:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Post creado correctamente
 */
router.post('/', controller.create);

/**
 * @swagger
 * /posts/{id}:
 *   put:
 *     summary: Actualizar un post
 *     tags: [Posts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *               author_id:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Post actualizado
 *       404:
 *         description: No encontrado
 */
router.put('/:id', controller.update);

/**
 * @swagger
 * /posts/{id}:
 *   delete:
 *     summary: Eliminar un post
 *     tags: [Posts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Post eliminado
 *       404:
 *         description: No encontrado
 */
router.delete('/:id', controller.remove);

module.exports = router;