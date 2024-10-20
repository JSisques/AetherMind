const CurriculumVitaeSchema = require('../model/CurriculumVitae');

const logger = require('../util/logger');

module.exports = {
  /**
   * Obtiene todos los proyectos almacenados en la base de datos.
   *
   * @async
   * @function getProjects
   * @returns {Promise<Array>} Una promesa que se resuelve con un array de todos los proyectos.
   * @throws {Error} Si ocurre un error al consultar la base de datos.
   */
  async getCurriculums() {
    logger.info('services/curriculumService.js | Entering getCurriculums()');

    return await CurriculumVitaeSchema.find();
  },

  async addCurriculum(body) {
    logger.info('services/curriculumService.js | Entering addCurriculum()');

    return await CurriculumVitaeSchema.create(body);
  },

  async updateCurriculum(id, body) {
    logger.info('services/curriculumService.js | Entering updateCurriculum()');

    return await CurriculumVitaeSchema.findByIdAndUpdate(id, body, { new: true });
  },
  async deleteCurriculum(id) {
    logger.info('services/curriculumService.js | Entering deleteCurriculum()');

    return await CurriculumVitaeSchema.findByIdAndDelete(id);
  },
  async getCurriculumById(id) {
    logger.info('services/curriculumService.js | Entering getCurriculumById()');

    return await CurriculumVitaeSchema.findById(id);
  },
};
