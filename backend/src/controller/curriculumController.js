const logger = require('../util/logger');
const httpCodes = require('http-status-codes');

const curriculumService = require('../service/curriculumService');

module.exports = {
  async getCurriculums(req, res) {
    logger.info('controllers/curriculumController.js | Entering getCurriculums()');

    try {
      const curriculums = await curriculumService.getCurriculums();

      if (!curriculums) {
        logger.debug(`controllers/curriculumController.js | The curriculums were not found: ${JSON.stringify(curriculums)}`);
        return res.status(httpCodes.StatusCodes.NOT_FOUND).json({ error: 'Curriculums not found' });
      }

      logger.info(`controllers/curriculumController.js | The curriculums were found: ${JSON.stringify(curriculums)}`);
      return res.status(httpCodes.StatusCodes.OK).json(curriculums);
    } catch (error) {
      logger.error(`controllers/curriculumController.js | Error getting curriculums: ${error}`);
      res.status(httpCodes.StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Error getting curriculums' });
    }
  },

  async addCurriculum(req, res) {
    logger.info('controllers/curriculumController.js | Entering addCurriculum()');

    try {
      const body = req.body;

      if (!body || Object.keys(body).length === 0) {
        logger.debug(`controllers/curriculumController.js | The body is empty: ${JSON.stringify(body)}`);
        return res.status(httpCodes.StatusCodes.BAD_REQUEST).json({ error: 'Body is required' });
      }

      const curriculum = await curriculumService.addCurriculum(body);

      if (!curriculum) {
        logger.debug(`controllers/curriculumController.js | The curriculum was not added: ${JSON.stringify(body)}`);
        return res.status(httpCodes.StatusCodes.BAD_REQUEST).json({ error: 'Curriculum not added' });
      }

      logger.info(`controllers/curriculumController.js | The curriculum was added: ${JSON.stringify(curriculum)}`);
      return res.status(httpCodes.StatusCodes.OK).json(curriculum);
    } catch (error) {
      logger.error(`controllers/curriculumController.js | Error adding curriculum: ${error}`);
      return res.status(httpCodes.StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Error adding curriculum' });
    }
  },

  async updateCurriculum(req, res) {
    logger.info('controllers/curriculumController.js | Entering updateCurriculum()');
    try {
      const { id } = req.params;

      if (!id) {
        logger.debug(`controllers/curriculumController.js | The id is required: ${JSON.stringify(id)}`);
        return res.status(httpCodes.StatusCodes.BAD_REQUEST).json({ error: 'Id is required' });
      }

      const body = req.body;

      if (!body || Object.keys(body).length === 0) {
        logger.debug(`controllers/curriculumController.js | The body is empty: ${JSON.stringify(body)}`);
        return res.status(httpCodes.StatusCodes.BAD_REQUEST).json({ error: 'Body is required' });
      }

      if (body.title === '' || body.description === '') {
        logger.debug(`controllers/curriculumController.js | The body is missing some fields: ${JSON.stringify(body)}`);
        return res.status(httpCodes.StatusCodes.BAD_REQUEST).json({ error: 'Title and description are required' });
      }

      const curriculum = await curriculumService.updateCurriculum(id, body);

      if (!curriculum) {
        logger.debug(`controllers/curriculumController.js | The curriculum was not updated: ${JSON.stringify(body)}`);
        return res.status(httpCodes.StatusCodes.BAD_REQUEST).json({ error: 'Curriculum not updated' });
      }

      logger.info(`controllers/curriculumController.js | The curriculum was updated: ${JSON.stringify(curriculum)}`);
      return res.status(httpCodes.StatusCodes.OK).json(curriculum);
    } catch (error) {
      logger.error(`controllers/curriculumController.js | Error updating curriculum: ${error}`);
      return res.status(httpCodes.StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Error updating curriculum' });
    }
  },

  async deleteCurriculum(req, res) {
    logger.info('controllers/curriculumController.js | Entering deleteCurriculum()');
    try {
      const { id } = req.params;

      if (!id) {
        logger.debug(`controllers/curriculumController.js | The id is required: ${JSON.stringify(id)}`);
        return res.status(httpCodes.StatusCodes.BAD_REQUEST).json({ error: 'Id is required' });
      }

      const curriculum = await curriculumService.deleteCurriculum(id);

      if (!curriculum) {
        logger.debug(`controllers/curriculumController.js | The curriculum was not deleted: ${JSON.stringify(id)}`);
        return res.status(httpCodes.StatusCodes.BAD_REQUEST).json({ error: 'Curriculum not deleted' });
      }

      logger.info(`controllers/curriculumController.js | The curriculum was deleted: ${JSON.stringify(curriculum)}`);
      return res.status(httpCodes.StatusCodes.OK).json(curriculum);
    } catch (error) {
      logger.error(`controllers/curriculumController.js | Error deleting curriculum: ${error}`);
      return res.status(httpCodes.StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Error deleting curriculum' });
    }
  },

  async getCurriculumById(req, res) {
    logger.info('controllers/curriculumController.js | Entering getCurriculumById()');
    try {
      const { id } = req.params;

      if (!id) {
        logger.debug(`controllers/curriculumController.js | The id is required: ${JSON.stringify(id)}`);
        return res.status(httpCodes.StatusCodes.BAD_REQUEST).json({ error: 'Id is required' });
      }

      const curriculum = await curriculumService.getCurriculumById(id);

      if (!curriculum) {
        logger.debug(`controllers/curriculumController.js | The curriculum was not found: ${JSON.stringify(id)}`);
        return res.status(httpCodes.StatusCodes.NOT_FOUND).json({ error: 'Curriculum not found' });
      }

      logger.info(`controllers/curriculumController.js | The curriculum was found: ${JSON.stringify(curriculum)}`);
      return res.status(httpCodes.StatusCodes.OK).json(curriculum);
    } catch (error) {
      logger.error(`controllers/curriculumController.js | Error getting curriculum by id: ${error}`);
      return res.status(httpCodes.StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Error getting curriculum by id' });
    }
  },
};
