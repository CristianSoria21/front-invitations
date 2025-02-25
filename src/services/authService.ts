import axiosInstance from './axiosInstance';

const authService = {
  csrf: async () => {
    await axiosInstance.get('/sanctum/csrf-cookie'); // Laravel requiere esto antes del login
  },

  login: async (credentials: { email: string; password: string }): Promise<boolean> => {
    try {
      await authService.csrf(); // Obtener CSRF antes de autenticar
      const response: any = await axiosInstance.post('api/login', credentials);

      if (response.data.token) {
        localStorage.setItem('token', response.data.token); // Guardar token en localStorage
        return true; // Retorna `true` si el login fue exitoso
      }

      return false; // Si no hay token, falló el login
    } catch (error: any) {
      console.error('Error en login:', error.response?.data?.message || error.message);
      return false; // Retorna `false` en caso de error
    }
  },

  logout: async () => {
    try {
      await axiosInstance.post('api/logout');
      localStorage.removeItem('token'); // Eliminar token al cerrar sesión
    } catch (error: any) {
      console.error('Error en logout:', error.response?.data?.message || error.message);
    }
  },

  // getUser: async () => {
  //   try {
  //     const response = await axiosInstance.get('/api/user');
  //     return response.data;
  //   } catch (error: any) {
  //     console.error('Error obteniendo usuario:', error.message);
  //     return null;
  //   }
  // },
};

export default authService;
