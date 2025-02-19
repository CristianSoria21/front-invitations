'use client';
import { useState, useEffect } from 'react';
import { Skeleton, Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

interface TemplateCardProps {
  title: string;
  description: string;
  imageUrl: string;
  index: number;
  isLoading?: boolean; // Prop para controlar el estado de carga de los cards
}

export default function TemplateCard({
  title,
  description,
  imageUrl,
  index,
  isLoading = false,
}: TemplateCardProps) {
  const [isVisible, setIsVisible] = useState(false);

  // Simula la aparición con un retardo basado en el índice
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), index * 300); // Retardo escalonado
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }} // Inicia con opacidad 0 y un ligero desplazamiento hacia arriba
      animate={isVisible ? { opacity: 1, y: 0 } : {}} // Anima hacia opacidad 1 y sin desplazamiento
      transition={{ duration: 0.5, delay: index * 0.2 }} // Duración de la animación y retardo escalonado
    >
      <Box
        sx={{
          bgcolor: 'white',
          p: 3,
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Box
          sx={{
            position: 'relative',
            height: 200,
            overflow: 'hidden',
            borderRadius: 2,
            mb: 2,
          }}
        >
          {isLoading ? (
            <Skeleton variant="rectangular" width="100%" height="100%" />
          ) : (
            <motion.img
              src={imageUrl}
              alt={title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
              initial={{ opacity: 0, y: 80 }} // Inicia con opacidad 0 y un desplazamiento hacia arriba
              animate={isVisible ? { opacity: 1, y: 0 } : {}} // Anima hacia opacidad 1 y sin desplazamiento
              transition={{ duration: 0.8, delay: 0.4 + index * 0.3 }} // Retardo base + retardo escalonado
            />
          )}
        </Box>

        {isLoading ? (
          <>
            <Skeleton variant="text" width="60%" height={30} />
            <Skeleton variant="text" width="100%" height={20} />
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 80 }} // Inicia con opacidad 0
            animate={isVisible ? { opacity: 1, y: 0 } : {}} // Anima hacia opacidad 1
            transition={{ duration: 0.4, delay: 0.2 + index * 0.3 }} // Duración de la animación y retardo escalonado
          >
            <Typography
              variant="h6"
              fontWeight="bold"
              color="text.primary"
              mb={1}
            >
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </motion.div>
        )}
      </Box>
    </motion.div>
  );
}
