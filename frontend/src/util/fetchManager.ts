import axiosInstance from '@/config/axiosConfig';

/**
 * Objeto que contiene funciones para realizar diferentes tipos de solicitudes HTTP utilizando Axios.
 */
const fetchManager = {
  /**
   * Realiza una solicitud GET.
   * @param {string} url - La URL del endpoint.
   * @param {Object} params - Parámetros opcionales de la consulta.
   * @returns {Promise<any>} - Promesa que resuelve con los datos de la respuesta.
   */
  get: async (url: string, params: object = {}) => {
    try {
      const response = await axiosInstance.get(url, { params });
      return response.data;
    } catch (error) {
      console.error('Error en la solicitud GET:', error);
      throw error;
    }
  },

  /**
   * Realiza una solicitud POST.
   * @param {string} url - La URL del endpoint.
   * @param {Object} data - Datos a enviar en el cuerpo de la solicitud.
   * @returns {Promise<any>} - Promesa que resuelve con los datos de la respuesta.
   */
  post: async (url: string, data: object = {}) => {
    try {
      const response = await axiosInstance.post(url, data);
      return response.data;
    } catch (error) {
      console.error('Error en la solicitud POST:', error);
      throw error;
    }
  },

  /**
   * Realiza una solicitud PUT.
   * @param {string} url - La URL del endpoint.
   * @param {Object} data - Datos a enviar para actualizar.
   * @returns {Promise<any>} - Promesa que resuelve con los datos de la respuesta.
   */
  update: async (url: string, data: object = {}) => {
    try {
      const response = await axiosInstance.put(url, data);
      return response.data;
    } catch (error) {
      console.error('Error en la solicitud PUT:', error);
      throw error;
    }
  },

  /**
   * Realiza una solicitud DELETE.
   * @param {string} url - La URL del endpoint.
   * @returns {Promise<any>} - Promesa que resuelve con los datos de la respuesta.
   */
  delete: async (url: string) => {
    try {
      const response = await axiosInstance.delete(url);
      return response.data;
    } catch (error) {
      console.error('Error en la solicitud DELETE:', error);
      throw error;
    }
  },
};

export default fetchManager;
