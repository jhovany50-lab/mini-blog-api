const express = require('express');
const router = express.Router();
const controller = require('../controllers/authors.controller');

/**
 * @swagger
 * /authors:
 *   get:
 *     summary: Obtener todos los autores
 *     tags: [Authors]
 *     responses:
 *       200:
 *         description: Lista de autores
 */
router.get('/', controller.getAll);

/**
 * @swagger
 * /authors/{id}:
 *   get:
 *     summary: Obtener un autor por ID
 *     tags: [Authors]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Autor encontrado
 *       404:
 *         description: No encontrado
 */
router.get('/:id', controller.getById);

/**
 * @swagger
 * /authors/{id}/posts:
 *   get:
 *     summary: Obtener posts de un autor
 *     tags: [Authors]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Lista de posts del autor
 */
router.get('/:id/posts', controller.getPostsByAuthor);

/**
 * @swagger
 * /authors:
 *   post:
 *     summary: Crear un nuevo autor
 *     tags: [Authors]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               bio:
 *                 type: string
 *     responses:
 *       201:
 *         description: Autor creado correctamente
 */
router.post('/', controller.create);

/**
 * @swagger
 * /authors/{id}:
 *   put:
 *     summary: Actualizar un autor
 *     tags: [Authors]
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
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               bio:
 *                 type: string
 *     responses:
 *       200:
 *         description: Autor actualizado
 *       404:
 *         description: No encontrado
 */
router.put('/:id', controller.update);

/**
 * @swagger
 * /authors/{id}:
 *   delete:
 *     summary: Eliminar un autor
 *     tags: [Authors]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Autor eliminado
 *       404:
 *         description: No encontrado
 */
router.delete('/:id', controller.remove);

module.exports = router;