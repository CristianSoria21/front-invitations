import axiosInstance from "./axiosInstance";

const authService = {
  login: async (credentials: { email: string; password: string }): Promise<boolean> => {
    try {
      const response = await axiosInstance.post("api/login", credentials);
      
      if (response.data.token) {
        localStorage.setItem("token", response.data.token); // ✅ Guardar token en localStorage
        return true;
      }

      return false;
    } catch (error: any) {
      console.error("Error en login:", error.response?.data?.message || error.message);
      return false;
    }
  },

  logout: async () => {
    try {
      await axiosInstance.post("/logout");
      localStorage.removeItem("token"); // ✅ Eliminar token al cerrar sesión
    } catch (error: any) {
      console.error("Error en logout:", error.response?.data?.message || error.message);
    }
  },

  getUser: async () => {
    try {
      const response = await axiosInstance.get("/user");
      return response.data;
    } catch (error: any) {
      console.error("Error obteniendo usuario:", error.message);
      return null;
    }
  },
};

export default authService;
