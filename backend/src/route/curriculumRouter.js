const express = require('express');
const curriculumController = require('../controller/curriculumController');
const router = express.Router();

/**
 * @swagger
 * /curriculum:
 *   get:
 *     summary: Obtiene todos los currículums
 *     tags: [Currículum]
 *     responses:
 *       200:
 *         description: Lista de currículums obtenida con éxito
 *       500:
 *         description: Error del servidor
 */
router.get('/curriculum', curriculumController.getCurriculums);

/**
 * @swagger
 * /curriculum:
 *   post:
 *     summary: Añade un nuevo currículum
 *     tags: [Currículum]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CurriculumVitae'
 *     responses:
 *       201:
 *         description: Currículum creado con éxito
 *       400:
 *         description: Datos de entrada inválidos
 *       500:
 *         description: Error del servidor
 */
router.post('/curriculum', curriculumController.addCurriculum);

/**
 * @swagger
 * /curriculum/{id}:
 *   put:
 *     summary: Actualiza un currículum existente
 *     tags: [Currículum]
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
 *             $ref: '#/components/schemas/CurriculumVitae'
 *     responses:
 *       200:
 *         description: Currículum actualizado con éxito
 *       400:
 *         description: Datos de entrada inválidos
 *       404:
 *         description: Currículum no encontrado
 *       500:
 *         description: Error del servidor
 */
router.put('/curriculum/:id', curriculumController.updateCurriculum);

/**
 * @swagger
 * /curriculum/{id}:
 *   delete:
 *     summary: Elimina un currículum
 *     tags: [Currículum]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Currículum eliminado con éxito
 *       404:
 *         description: Currículum no encontrado
 *       500:
 *         description: Error del servidor
 */
router.delete('/curriculum/:id', curriculumController.deleteCurriculum);

/**
 * @swagger
 * /curriculum/{id}:
 *   get:
 *     summary: Obtiene un currículum por su ID
 *     tags: [Currículum]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Currículum obtenido con éxito
 *       404:
 *         description: Currículum no encontrado
 *       500:
 *         description: Error del servidor
 */
router.get('/curriculum/:id', curriculumController.getCurriculumById);

module.exports = router;
