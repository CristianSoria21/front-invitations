'use client';

import { useRouter } from 'next/navigation';
import {
  TextField,
  Button,
  Typography,
  Container,
  Paper,
  Box,
  Link,
} from '@mui/material';

export default function RegisterForm() {
  const router = useRouter();

  const handleRegister = () => {
    router.push('/dashboard');
  };

  return (
    <Container maxWidth="xs">
      <Paper elevation={6} sx={{ padding: 4, borderRadius: 3, mt: 15 }}>
        <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
          Registro
        </Typography>

        <Box>
          <TextField
            fullWidth
            id="fullName"
            label="Nombre completo"
            variant="outlined"
            margin="normal"
            required
          />

          <TextField
            fullWidth
            id="email"
            label="Correo electrónico"
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

          <TextField
            fullWidth
            id="confirmPassword"
            label="Confirmar contraseña"
            type="password"
            variant="outlined"
            margin="normal"
            required
          />

          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
            <Button
              variant="contained"
              color="success"
              onClick={handleRegister}
              sx={{ textTransform: 'none', fontWeight: 'bold', width: '100%' }}
            >
              Registrarse
            </Button>
          </Box>
        </Box>

        <Box sx={{ textAlign: 'center', mt: 3 }}>
          <Typography variant="body1">¿Ya tienes una cuenta?</Typography>
          <Link
            href="/login"
            variant="body2"
            sx={{ fontWeight: 'bold', color: 'primary.main' }}
          >
            Iniciar sesión
          </Link>
        </Box>
      </Paper>
    </Container>
  );
}
