const logger = require('../util/logger');
const httpCodes = require('http-status-codes');

const projectService = require('../service/projectService');

module.exports = {
  /**
   * Obtiene todos los proyectos.
   *
   * @async
   * @function getProjects
   * @param {Object} req - Objeto de solicitud Express.
   * @param {Object} res - Objeto de respuesta Express.
   * @returns {Promise<void>}
   * @throws {Error} Si ocurre un error al obtener los proyectos.
   *
   * @description
   * Esta función maneja la solicitud para obtener todos los proyectos.
   * Utiliza el servicio projectService para recuperar los proyectos de la base de datos.
   * Si se encuentran proyectos, los devuelve con un código de estado 200 (OK).
   * Si no se encuentran proyectos, devuelve un error 404 (NOT_FOUND).
   * En caso de error, devuelve un código de estado 500 (INTERNAL_SERVER_ERROR).
   */
  async getProjects(req, res) {
    logger.info('controllers/projectController.js | Entering getProjects()');

    try {
      const projects = await projectService.getProjects();

      if (!projects) {
        logger.debug(`controllers/projectController.js | The projects were not found: ${JSON.stringify(projects)}`);
        return res.status(httpCodes.StatusCodes.NOT_FOUND).json({ error: 'Projects not found' });
      }

      logger.info(`controllers/projectController.js | The projects were found: ${JSON.stringify(projects)}`);
      return res.status(httpCodes.StatusCodes.OK).json(projects);
    } catch (error) {
      logger.error(`controllers/projectController.js | Error getting projects: ${error}`);
      res.status(httpCodes.StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Error getting projects' });
    }
  },

  /**
   * Agrega un nuevo proyecto.
   *
   * @async
   * @function addProject
   * @param {Object} req - Objeto de solicitud Express.
   * @param {Object} res - Objeto de respuesta Express.
   * @returns {Promise<void>}
   * @throws {Error} Si ocurre un error al agregar el proyecto.
   *
   * @description
   * Esta función maneja la solicitud para agregar un nuevo proyecto.
   * Verifica que el cuerpo de la solicitud no esté vacío.
   * Utiliza el servicio projectService para agregar el proyecto a la base de datos.
   * Si el proyecto se agrega con éxito, lo devuelve con un código de estado 200 (OK).
   * Si el cuerpo está vacío o el proyecto no se puede agregar, devuelve un error 400 (BAD_REQUEST).
   * En caso de error, devuelve un código de estado 500 (INTERNAL_SERVER_ERROR).
   */
  async addProject(req, res) {
    logger.info('controllers/projectController.js | Entering addProject()');

    try {
      const body = req.body;

      if (!body || Object.keys(body).length === 0) {
        logger.debug(`controllers/projectController.js | The body is empty: ${JSON.stringify(body)}`);
        return res.status(httpCodes.StatusCodes.BAD_REQUEST).json({ error: 'Body is required' });
      }

      const project = await projectService.addProject(body);

      if (!project) {
        logger.debug(`controllers/projectController.js | The project was not added: ${JSON.stringify(body)}`);
        return res.status(httpCodes.StatusCodes.BAD_REQUEST).json({ error: 'Project not added' });
      }

      logger.info(`controllers/projectController.js | The project was added: ${JSON.stringify(project)}`);
      return res.status(httpCodes.StatusCodes.OK).json(project);
    } catch (error) {
      logger.error(`controllers/projectController.js | Error adding project: ${error}`);
      return res.status(httpCodes.StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Error adding project' });
    }
  },

  /**
   * Actualiza un proyecto existente.
   *
   * @async
   * @function updateProject
   * @param {Object} req - Objeto de solicitud Express.
   * @param {Object} res - Objeto de respuesta Express.
   * @returns {Promise<void>}
   * @throws {Error} Si ocurre un error al actualizar el proyecto.
   *
   * @description
   * Esta función maneja la solicitud para actualizar un proyecto existente.
   * Verifica que se proporcione un ID válido y que el cuerpo de la solicitud no esté vacío.
   * Comprueba que el título y la descripción no estén vacíos.
   * Utiliza el servicio projectService para actualizar el proyecto en la base de datos.
   * Si el proyecto se actualiza con éxito, lo devuelve con un código de estado 200 (OK).
   * Si el proyecto no se encuentra o no se puede actualizar, devuelve un error 400 (BAD_REQUEST).
   * En caso de error, devuelve un código de estado 500 (INTERNAL_SERVER_ERROR).
   */
  async updateProject(req, res) {
    logger.info('controllers/projectController.js | Entering updateProject()');
    try {
      const { id } = req.params;

      if (!id) {
        logger.debug(`controllers/projectController.js | The id is required: ${JSON.stringify(id)}`);
        return res.status(httpCodes.StatusCodes.BAD_REQUEST).json({ error: 'Id is required' });
      }

      const body = req.body;

      if (!body || Object.keys(body).length === 0) {
        logger.debug(`controllers/projectController.js | The body is empty: ${JSON.stringify(body)}`);
        return res.status(httpCodes.StatusCodes.BAD_REQUEST).json({ error: 'Body is required' });
      }

      if (body.title === '' || body.description === '') {
        logger.debug(`controllers/projectController.js | The body is missing some fields: ${JSON.stringify(body)}`);
        return res.status(httpCodes.StatusCodes.BAD_REQUEST).json({ error: 'Title and description are required' });
      }

      const project = await projectService.updateProject(id, body);

      if (!project) {
        logger.debug(`controllers/projectController.js | The project was not updated: ${JSON.stringify(body)}`);
        return res.status(httpCodes.StatusCodes.BAD_REQUEST).json({ error: 'Project not updated' });
      }

      logger.info(`controllers/projectController.js | The project was updated: ${JSON.stringify(project)}`);
      return res.status(httpCodes.StatusCodes.OK).json(project);
    } catch (error) {
      logger.error(`controllers/projectController.js | Error updating project: ${error}`);
      return res.status(httpCodes.StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Error updating project' });
    }
  },

  /**
   * Elimina un proyecto existente.
   *
   * @async
   * @function deleteProject
   * @param {Object} req - Objeto de solicitud Express.
   * @param {Object} res - Objeto de respuesta Express.
   * @returns {Promise<void>}
   * @throws {Error} Si ocurre un error al eliminar el proyecto.
   *
   * @description
   * Esta función maneja la solicitud para eliminar un proyecto existente.
   * Verifica que se proporcione un ID válido en los parámetros de la solicitud.
   * Utiliza el servicio projectService para eliminar el proyecto de la base de datos.
   * Si el proyecto se elimina con éxito, lo devuelve con un código de estado 200 (OK).
   * Si el proyecto no se encuentra o no se puede eliminar, devuelve un error 400 (BAD_REQUEST).
   * En caso de error, devuelve un código de estado 500 (INTERNAL_SERVER_ERROR).
   */
  async deleteProject(req, res) {
    logger.info('controllers/projectController.js | Entering deleteProject()');
    try {
      const { id } = req.params;

      if (!id) {
        logger.debug(`controllers/projectController.js | The id is required: ${JSON.stringify(id)}`);
        return res.status(httpCodes.StatusCodes.BAD_REQUEST).json({ error: 'Id is required' });
      }

      const project = await projectService.deleteProject(id);

      if (!project) {
        logger.debug(`controllers/projectController.js | The project was not deleted: ${JSON.stringify(id)}`);
        return res.status(httpCodes.StatusCodes.BAD_REQUEST).json({ error: 'Project not deleted' });
      }

      logger.info(`controllers/projectController.js | The project was deleted: ${JSON.stringify(project)}`);
      return res.status(httpCodes.StatusCodes.OK).json(project);
    } catch (error) {
      logger.error(`controllers/projectController.js | Error deleting project: ${error}`);
      return res.status(httpCodes.StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Error deleting project' });
    }
  },

  /**
   * Obtiene un proyecto específico por su ID.
   *
   * @async
   * @function getProjectById
   * @param {Object} req - Objeto de solicitud Express.
   * @param {Object} res - Objeto de respuesta Express.
   * @returns {Promise<void>}
   * @throws {Error} Si ocurre un error al obtener el proyecto.
   *
   * @description
   * Esta función maneja la solicitud para obtener un proyecto específico por su ID.
   * Verifica que se proporcione un ID válido en los parámetros de la solicitud.
   * Utiliza el servicio projectService para buscar el proyecto en la base de datos.
   * Si el proyecto se encuentra, lo devuelve con un código de estado 200 (OK).
   * Si el proyecto no se encuentra, devuelve un error 404 (NOT_FOUND).
   * Si no se proporciona un ID, devuelve un error 400 (BAD_REQUEST).
   * En caso de error, devuelve un código de estado 500 (INTERNAL_SERVER_ERROR).
   */
  async getProjectById(req, res) {
    logger.info('controllers/projectController.js | Entering getProjectById()');
    try {
      const { id } = req.params;

      if (!id) {
        logger.debug(`controllers/projectController.js | The id is required: ${JSON.stringify(id)}`);
        return res.status(httpCodes.StatusCodes.BAD_REQUEST).json({ error: 'Id is required' });
      }

      const project = await projectService.getProjectById(id);

      if (!project) {
        logger.debug(`controllers/projectController.js | The project was not found: ${JSON.stringify(id)}`);
        return res.status(httpCodes.StatusCodes.NOT_FOUND).json({ error: 'Project not found' });
      }

      logger.info(`controllers/projectController.js | The project was found: ${JSON.stringify(project)}`);
      return res.status(httpCodes.StatusCodes.OK).json(project);
    } catch (error) {
      logger.error(`controllers/projectController.js | Error getting project by id: ${error}`);
      return res.status(httpCodes.StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Error getting project by id' });
    }
  },
};
