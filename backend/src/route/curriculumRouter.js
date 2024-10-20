const express = require('express');
const curriculumController = require('../controller/curriculumController');
const router = express.Router();

router.get('/curriculum', curriculumController.getCurriculums);
router.post('/curriculum', curriculumController.addCurriculum);
router.put('/curriculum/:id', curriculumController.updateCurriculum);
router.delete('/curriculum/:id', curriculumController.deleteCurriculum);
router.get('/curriculum/:id', curriculumController.getCurriculumById);

module.exports = router;
