import {publicAxios, authAxios} from './axiosInstance';

const authService = {
  login: async (credentials: { email: string; password: string }) => {
    try {
      const response = await publicAxios.post('api/login', credentials);

      if (response.data.token) {
        localStorage.setItem('token', response.data.token); // ✅ Guardar token en localStorage
        return true;
      }

      return false;
    } catch (error: any) {
      console.error('Error en login:', error.response?.data?.message || error.message);
      return false;
    }
  },

  register: async (credentials: {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
  }) => {
    try {
      const response = await publicAxios.post('/api/register', credentials);

      if (response.data.token) {
        localStorage.setItem('token', response.data.token); // ✅ Guardar token en localStorage
        return true;
      }
      return false;
    } catch (error: any) {
      console.error('Error en login:', error.response?.data?.message || error.message);
      return false;
    }
  },

  logout: async () => {
    try {
      const response = await authAxios.post('api/logout');
      localStorage.removeItem('token'); // ✅ Eliminar token al cerrar sesión
      console.log(response.data.message);
      return true;
    } catch (error: any) {
      console.error('Error en logout:', error.response?.data?.message || error.message);
      return false;
    }
  },
};

export default authService;
