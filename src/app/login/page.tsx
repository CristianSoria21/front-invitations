'use client';
import { useRouter } from 'next/navigation';
import {
  TextField,
  Button,
  Typography,
  Container,
  Box,
  Link,
} from '@mui/material';
import { useEffect, useState } from 'react';

export default function LoginForm() {
  const router = useRouter();

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleLogin = () => {
    router.push('/dashboard');
  };

  if (!isClient) return null;

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

        <TextField
          fullWidth
          id="email"
          label="Correo Electrónico"
          type="email"
          variant="outlined"
          margin="normal"
          required
        />

        <TextField
          fullWidth
          id="password"
          label="Contraseña"
          type="password"
          variant="outlined"
          margin="normal"
          required
        />

        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleLogin}
            sx={{ textTransform: 'none', fontWeight: 'bold' }}
          >
            Iniciar Sesión
          </Button>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          <Link
            href="#"
            variant="body2"
            sx={{ fontWeight: 'bold', color: 'primary.main' }}
          >
            ¿Olvidaste tu contraseña?
          </Link>
        </Box>

        <Box sx={{ textAlign: 'center', mt: 3 }}>
          <Typography variant="body2" color="text.secondary">
            ¿No tienes una cuenta?{' '}
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
    </Container>
  );
}
