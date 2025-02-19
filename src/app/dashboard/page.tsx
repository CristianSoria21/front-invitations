'use client';
import { useState, useEffect } from 'react';
import { Box, Container, Typography } from '@mui/material';
import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';
import TemplateCard from '../components/templates/TemplateCard';

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Estado de carga

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Datos de ejemplo para las plantillas
  const templates = [
    {
      title: 'Plantilla 1',
      description: 'Diseño moderno y minimalista para tu sitio web.',
      imageUrl:
        'https://midu.dev/images/wallpapers/fondo-react-horizontal-random-4k.png',
    },
    {
      title: 'Plantilla 2',
      description: 'Ideal para blogs personales o profesionales.',
      imageUrl:
        'https://midu.dev/images/wallpapers/fondo-react-horizontal-random-4k.png',
    },
    {
      title: 'Plantilla 3',
      description: 'Perfecta para tiendas en línea y comercio electrónico.',
      imageUrl:
        'https://midu.dev/images/wallpapers/fondo-react-horizontal-random-4k.png',
    },
    {
      title: 'Plantilla 4',
      description: 'Diseño corporativo para empresas y startups.',
      imageUrl:
        'https://midu.dev/images/wallpapers/fondo-react-horizontal-random-4k.png',
    },
    {
      title: 'Plantilla 5',
      description: 'Portafolio creativo para diseñadores y artistas.',
      imageUrl:
        'https://midu.dev/images/wallpapers/fondo-react-horizontal-random-4k.png',
    },
    {
      title: 'Plantilla 6',
      description: 'Landing page optimizada para conversiones.',
      imageUrl:
        'https://midu.dev/images/wallpapers/fondo-react-horizontal-random-4k.png',
    },
  ];

  // Simula la carga de datos
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000); // 5 segundos de carga
    return () => clearTimeout(timer);
  }, []);

  return (
    <Box display="flex" sx={{ position: 'relative', zIndex: 0, marginTop: 5 }}>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Contenido principal */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
        }}
      >
        <Navbar />
        <Container sx={{ paddingTop: '64px', paddingBottom: '32px' }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Catálogo de Plantillas
          </Typography>

          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 4,
              '& > *': {
                flex: {
                  xs: '1 1 100%',
                  sm: '1 1 calc(50% - 16px)',
                  md: '1 1 calc(33.33% - 16px)',
                },
              },
            }}
          >
            {templates.map((template, index) => (
              <Box key={index}>
                <TemplateCard
                  title={template.title}
                  description={template.description}
                  imageUrl={template.imageUrl}
                  index={index}
                  isLoading={isLoading}
                />
              </Box>
            ))}
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
