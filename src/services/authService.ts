import { publicAxios, authAxios } from './axiosInstance';
import { showSnackbar } from '@/utils/snackbarUtils'; // ✅ Importar Snackbar Global

const authService = {
  /**
   * 🔹 Login de usuario
   */
  login: async (credentials: { email: string; password: string }) => {
    try {
      const response = await publicAxios.post('/api/login', credentials);

      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        showSnackbar('Inicio de sesión exitoso 🎉', 'success'); // ✅ Usar Snackbar sin `useSnackbar()`
        return true;
      }

      showSnackbar('Error en el inicio de sesión', 'error');
      return false;
    } catch (error: any) {
      showSnackbar(error.response?.data?.message || 'Error en el inicio de sesión', 'error');
      return false;
    }
  },

  /**
   * 🔹 Registro de usuario
   */
  register: async (credentials: {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
  }) => {
    try {
      const response = await publicAxios.post('/api/register', credentials);

      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        showSnackbar('Registro exitoso 🎉', 'success');
        return true;
      }

      showSnackbar('Error en el registro', 'error');
      return false;
    } catch (error: any) {
      showSnackbar(error.response?.data?.message || 'Error en el registro', 'error');
      return false;
    }
  },

  /**
   * 🔹 Cerrar sesión (Logout)
   */
  logout: async () => {
    try {
      await authAxios.post('/api/logout');
      localStorage.removeItem('token');
      showSnackbar('Sesión cerrada correctamente', 'success');
      return true;
    } catch (error: any) {
      showSnackbar('Error al cerrar sesión', 'error');
      return false;
    }
  },
};

export default authService;
