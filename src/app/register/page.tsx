"use client"; // Necesario en Next.js 13+ para usar hooks como useState y useRouter
import { useState } from "react";
import { useRouter } from "next/navigation";
import { TextField, Button, Typography, Container, Paper, Box, Link } from "@mui/material";
import SuccessModal from "../components/success-modal";

export default function RegisterForm() {
    const [showModal, setShowModal] = useState(false);
    const router = useRouter();

    const handleRegister = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setShowModal(true);

      setTimeout(() => {
        setShowModal(false);
        router.push("/login");
      }, 3000);
    };

    return (
      <Container maxWidth="xs">
        <Paper elevation={6} sx={{ padding: 4, borderRadius: 3, mt: 15 }}>
          <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
            Registro
          </Typography>
  
          <form onSubmit={handleRegister} style={{ position: "relative", zIndex: 0 }}>
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
  
            <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
              <Button
                variant="contained"
                color="success"
                type="submit"
                sx={{ textTransform: "none", fontWeight: "bold", width: "100%" }}
              >
                Registrarse
              </Button>
            </Box>
          </form>
  
          <Box sx={{ textAlign: "center", mt: 3 }}>
            <Typography variant="body1">¿Ya tienes una cuenta?</Typography>
            <Link href="/login" variant="body2" sx={{ fontWeight: "bold", color: "primary.main" }}>
              Iniciar sesión
            </Link>
          </Box>
        </Paper>
  
        {/* Modal de éxito */}
        {showModal && <SuccessModal />}
      </Container>
    );
}