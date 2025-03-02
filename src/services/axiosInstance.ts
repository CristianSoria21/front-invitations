import axios, { AxiosError } from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

const publicAxios = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

const authAxios = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

// ✅ Interceptor para agregar token automáticamente a cada petición
authAxios.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

//🔹 Interceptor de Response: Maneja errores cuando el token es inválido (401)
authAxios.interceptors.response.use(
  (response) => response, // Retorna la respuesta si es exitosa
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      console.warn('Token inválido o expirado, redirigiendo a login...');

      if (typeof window !== 'undefined') {
        localStorage.removeItem('token'); // Elimina el token del almacenamiento local
        window.location.href = '/login';
      }
    }
    return Promise.reject(error);
  }
);

export { authAxios, publicAxios };
