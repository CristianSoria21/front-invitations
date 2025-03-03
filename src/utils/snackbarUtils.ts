import { createContext } from 'react';
import { SnackbarRefType } from '../utils/types';

// 🔹 Contexto Global para Snackbar
export const SnackbarUtilsContext = createContext<SnackbarRefType | null>(null);

let snackbarRef: SnackbarRefType | null = null;

// 🔹 Función para inicializar el Snackbar
export const setSnackbarRef = (ref: SnackbarRefType) => {
  snackbarRef = ref;
};

// 🔹 Función Global para Mostrar Mensajes
export const showSnackbar = (
  message: string,
  severity: 'success' | 'error' | 'warning' | 'info' = 'info'
) => {
  if (snackbarRef) {
    snackbarRef.showSnackbar(message, severity);
  }
};
