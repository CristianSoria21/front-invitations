'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { TextField, Button, Typography, Container, Box, Link, Alert } from '@mui/material';
import authService from '@/services/authService';

export default function LoginForm() {
  const router = useRouter();
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage('');
    setLoading(true);

    const success = await authService.login(credentials);
    setLoading(false);

    if (success) {
      router.push('/dashboard'); // ✅ Redirigir tras login exitoso
    } else {
    }
  };

  return (
    <Container
      maxWidth="xs"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        mt: 20,
      }}
    >
      <Box
        sx={{
          width: '100%',
          p: 4,
          bgcolor: 'background.paper',
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Typography variant="h5" component="h2" align="center" gutterBottom>
          Iniciar Sesión
        </Typography>

        <form onSubmit={handleLogin}>
          <TextField
            fullWidth
            id="email"
            label="Correo Electrónico"
            type="email"
            name="email"
            variant="outlined"
            margin="normal"
            required
            value={credentials.email}
            onChange={handleChange}
          />

          <TextField
            fullWidth
            id="password"
            label="Contraseña"
            type="password"
            variant="outlined"
            margin="normal"
            name="password"
            required
            value={credentials.password}
            onChange={handleChange}
          />

          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              type="submit"
              disabled={loading}
              sx={{ textTransform: 'none', fontWeight: 'bold' }}
            >
              {loading ? 'Iniciando...' : 'Iniciar Sesión'}
            </Button>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            <Link href="#" variant="body2" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
              ¿Olvidaste tu contraseña?
            </Link>
          </Box>
        </form>

        <Box sx={{ textAlign: 'center', mt: 3 }}>
          <Typography variant="body2" color="text.secondary">
            ¿No tienes una cuenta?
            <Link
              href="/register"
              variant="body2"
              sx={{ fontWeight: 'bold', color: 'primary.main' }}
            >
              Regístrate
            </Link>
          </Typography>
        </Box>
      </Box>

      {errorMessage && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {errorMessage}
        </Alert>
      )}
    </Container>
  );
}
