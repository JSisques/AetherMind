import axios from 'axios';

// Configuración base de Axios
const axiosInstance = axios.create({
  baseURL: process.env.BACKEND_URL || 'http://localhost:3000/api/v1',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor para agregar el token de autenticación
// axiosInstance.interceptors.request.use(
//   config => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       config.headers['Authorization'] = `Bearer ${token}`;
//     }
//     return config;
//   },
//   error => {
//     return Promise.reject(error);
//   },
// );

// Interceptor para manejar errores de respuesta
// axiosInstance.interceptors.response.use(
//   response => response,
//   error => {
//     if (error.response && error.response.status === 401) {
//       // Manejar error de autenticación (por ejemplo, redirigir al login)
//       console.error('Error de autenticación');
//       // Aquí podrías agregar lógica para redirigir al usuario al login
//     }
//     return Promise.reject(error);
//   },
// );

export default axiosInstance;
