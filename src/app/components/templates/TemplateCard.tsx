'use client';

import { Box, Typography, Card, CardMedia, CardContent } from '@mui/material';

interface TemplateCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

export default function TemplateCard({
  title,
  description,
  imageUrl,
}: TemplateCardProps) {
  return (
    <Card
      sx={{
        bgcolor: 'white',
        boxShadow: 3,
        borderRadius: 2,
        overflow: 'hidden',
      }}
    >
      <CardMedia component="img" height="200" image={imageUrl} alt={title} />

      <CardContent>
        <Box>
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
        </Box>
      </CardContent>
    </Card>
  );
}
