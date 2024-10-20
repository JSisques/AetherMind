const express = require('express');
const projectController = require('../controller/projectController');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Proyectos
 *   description: API para gestionar proyectos
 *
 * /projects:
 *   get:
 *     summary: Obtiene todos los proyectos
 *     tags: [Proyectos]
 *     responses:
 *       200:
 *         description: Lista de proyectos
 *       404:
 *         description: No se encontraron proyectos
 *       500:
 *         description: Error del servidor
 *
 *   post:
 *     summary: Crea un nuevo proyecto
 *     tags: [Proyectos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - description
 *               - url
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               url:
 *                 type: string
 *     responses:
 *       200:
 *         description: Proyecto creado exitosamente
 *       400:
 *         description: Datos inválidos en el cuerpo de la solicitud
 *       500:
 *         description: Error del servidor
 *
 * /projects/{id}:
 *   get:
 *     summary: Obtiene un proyecto por ID
 *     tags: [Proyectos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Detalles del proyecto
 *       404:
 *         description: Proyecto no encontrado
 *       500:
 *         description: Error del servidor
 *
 *   put:
 *     summary: Actualiza un proyecto existente
 *     tags: [Proyectos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - description
 *               - url
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               url:
 *                 type: string
 *     responses:
 *       200:
 *         description: Proyecto actualizado exitosamente
 *       400:
 *         description: Datos inválidos en el cuerpo de la solicitud
 *       404:
 *         description: Proyecto no encontrado
 *       500:
 *         description: Error del servidor
 *
 *   delete:
 *     summary: Elimina un proyecto
 *     tags: [Proyectos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Proyecto eliminado exitosamente
 *       404:
 *         description: Proyecto no encontrado
 *       500:
 *         description: Error del servidor
 */
router.get('/projects', projectController.getProjects);

/**
 * @swagger
 * /projects:
 *   post:
 *     summary: Crea un nuevo proyecto
 *     tags: [Proyectos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - description
 *               - url
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               url:
 *                 type: string
 *     responses:
 *       200:
 *         description: Proyecto creado exitosamente
 *       400:
 *         description: Datos inválidos en el cuerpo de la solicitud
 *       500:
 *         description: Error del servidor
 */
router.post('/projects', projectController.addProject);

/**
 * @swagger
 * /projects/{id}:
 *   put:
 *     summary: Actualiza un proyecto existente
 *     tags: [Proyectos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - description
 *               - url
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               url:
 *                 type: string
 *     responses:
 *       200:
 *         description: Proyecto actualizado exitosamente
 *       400:
 *         description: Datos inválidos en el cuerpo de la solicitud
 *       404:
 *         description: Proyecto no encontrado
 *       500:
 *         description: Error del servidor
 */
router.put('/projects/:id', projectController.updateProject);

/**
 * @swagger
 * /projects/{id}:
 *   delete:
 *     summary: Elimina un proyecto
 *     tags: [Proyectos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Proyecto eliminado exitosamente
 *       404:
 *         description: Proyecto no encontrado
 *       500:
 *         description: Error del servidor
 */
router.delete('/projects/:id', projectController.deleteProject);

/**
 * @swagger
 * /projects/{id}:
 *   get:
 *     summary: Obtiene un proyecto por su ID
 *     tags: [Proyectos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Proyecto encontrado exitosamente
 *       404:
 *         description: Proyecto no encontrado
 *       500:
 *         description: Error del servidor
 */
router.get('/projects/:id', projectController.getProjectById);

module.exports = router;
