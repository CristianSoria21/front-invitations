// 🔹 Interfaz para el Snackbar
export interface SnackbarRefType {
  showSnackbar: (message: string, severity?: 'success' | 'error' | 'warning' | 'info') => void;
}

// 🔹 Interfaz para una respuesta de API genérica
export interface ApiResponse<T> {
  data: T;
  error?: string;
}

// 🔹 Interfaz para un usuario
export interface User {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'user' | 'guest';
}
