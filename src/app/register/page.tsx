'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { TextField, Button, Typography, Container, Paper, Box, Link, Alert } from '@mui/material';
import authService from '@/services/authService';

export default function RegisterForm() {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [credentials, setCredentials] = useState<{
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
  }>({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage('');

    if (credentials.password !== credentials.password_confirmation) {
      setErrorMessage('Las contraseñas no coinciden.');
      return;
    }

    setLoading(true);
    const success = await authService.register(credentials);

    setLoading(false);

    if (success) {
      router.push('/dashboard'); // ✅ Redirigir tras registro exitoso
    } else {
      setErrorMessage('Error en el registro. Intenta nuevamente.');
    }
  };

  return (
    <Container maxWidth="xs">
      <Paper elevation={6} sx={{ padding: 4, borderRadius: 3, mt: 15 }}>
        <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
          Registro
        </Typography>

        {errorMessage && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {errorMessage}
          </Alert>
        )}

        <form onSubmit={handleRegister}>
          <TextField
            fullWidth
            name="name"
            label="Nombre completo"
            variant="outlined"
            margin="normal"
            required
            value={credentials.name}
            onChange={handleChange}
          />

          <TextField
            fullWidth
            name="email"
            label="Correo electrónico"
            type="email"
            variant="outlined"
            margin="normal"
            required
            value={credentials.email}
            onChange={handleChange}
          />

          <TextField
            fullWidth
            name="password"
            label="Contraseña"
            type="password"
            variant="outlined"
            margin="normal"
            required
            value={credentials.password}
            onChange={handleChange}
          />

          <TextField
            fullWidth
            name="password_confirmation"
            label="Confirmar contraseña"
            type="password"
            variant="outlined"
            margin="normal"
            required
            value={credentials.password_confirmation}
            onChange={handleChange}
          />

          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
            <Button
              variant="contained"
              color="success"
              type="submit"
              loading={loading}
              sx={{ textTransform: 'none', fontWeight: 'bold', width: '100%' }}
            >
              {loading ? 'Registrando...' : 'Registrarse'}
            </Button>
          </Box>
        </form>

        <Box sx={{ textAlign: 'center', mt: 3 }}>
          <Typography variant="body1">¿Ya tienes una cuenta?</Typography>
          <Link href="/login" variant="body2" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
            Iniciar sesión
          </Link>
        </Box>
      </Paper>
    </Container>
  );
}
