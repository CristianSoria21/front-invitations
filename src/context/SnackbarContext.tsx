'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { Snackbar, Alert } from '@mui/material';
import { SnackbarUtilsContext, setSnackbarRef } from '@/utils/snackbarUtils'; // ✅ Importar Snackbar Utils
import { SnackbarRefType } from '../utils/types';

const SnackbarContext = createContext<SnackbarRefType | undefined>(undefined);

export const SnackbarProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [severity, setSeverity] = useState<'success' | 'error' | 'warning' | 'info'>('info');

  // 🔹 Función para mostrar el Snackbar
  const showSnackbar = (msg: string, sev: 'success' | 'error' | 'warning' | 'info' = 'info') => {
    setMessage(msg);
    setSeverity(sev);
    setOpen(true);
  };

  // ✅ Guardamos la referencia global del Snackbar
  setSnackbarRef({ showSnackbar });

  return (
    <SnackbarContext.Provider value={{ showSnackbar }}>
      <SnackbarUtilsContext.Provider value={{ showSnackbar }}>
        {children}
      </SnackbarUtilsContext.Provider>

      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert severity={severity} onClose={() => setOpen(false)}>
          {message}
        </Alert>
      </Snackbar>
    </SnackbarContext.Provider>
  );
};

export const useSnackbar = () => {
  const context = useContext(SnackbarContext);
  if (!context) {
    throw new Error('useSnackbar debe usarse dentro de SnackbarProvider');
  }
  return context;
};
