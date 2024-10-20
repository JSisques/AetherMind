const ProjectSchema = require('../model/ProjectSchema');

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
  async getProjects() {
    logger.info('services/projectService.js | Entering getProjects()');

    return await ProjectSchema.find();
  },

  /**
   * Agrega un nuevo proyecto a la base de datos.
   *
   * @async
   * @function addProject
   * @param {Object} body - El objeto que contiene los datos del proyecto a agregar.
   * @returns {Promise<Object>} Una promesa que se resuelve con el objeto del proyecto creado.
   * @throws {Error} Si ocurre un error al crear el proyecto en la base de datos.
   */
  async addProject(body) {
    logger.info('services/projectService.js | Entering addProject()');

    return await ProjectSchema.create(body);
  },

  /**
   * Actualiza un proyecto existente en la base de datos.
   *
   * @async
   * @function updateProject
   * @param {string} id - El identificador único del proyecto a actualizar.
   * @param {Object} body - El objeto que contiene los nuevos datos del proyecto.
   * @returns {Promise<Object>} Una promesa que se resuelve con el objeto del proyecto actualizado.
   * @throws {Error} Si ocurre un error al actualizar el proyecto en la base de datos.
   */
  async updateProject(id, body) {
    logger.info('services/projectService.js | Entering updateProject()');

    return await ProjectSchema.findByIdAndUpdate(id, body, { new: true });
  },
  /**
   * Elimina un proyecto existente de la base de datos.
   *
   * @async
   * @function deleteProject
   * @param {string} id - El identificador único del proyecto a eliminar.
   * @returns {Promise<Object|null>} Una promesa que se resuelve con el objeto del proyecto eliminado, o null si no se encuentra.
   * @throws {Error} Si ocurre un error al eliminar el proyecto de la base de datos.
   */
  async deleteProject(id) {
    logger.info('services/projectService.js | Entering deleteProject()');

    return await ProjectSchema.findByIdAndDelete(id);
  },
  /**
   * Obtiene un proyecto específico de la base de datos por su ID.
   *
   * @async
   * @function getProjectById
   * @param {string} id - El identificador único del proyecto a buscar.
   * @returns {Promise<Object|null>} Una promesa que se resuelve con el objeto del proyecto encontrado, o null si no se encuentra.
   * @throws {Error} Si ocurre un error al buscar el proyecto en la base de datos.
   */
  async getProjectById(id) {
    logger.info('services/projectService.js | Entering getProjectById()');

    return await ProjectSchema.findById(id);
  },
};
