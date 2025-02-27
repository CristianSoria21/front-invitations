'use client';
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Box,
  Typography,
} from '@mui/material';
import {
  Home as HomeIcon,
  Description as DescriptionIcon,
  Settings as SettingsIcon,
  Menu as MenuIcon,
} from '@mui/icons-material';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

export default function Sidebar({ isOpen, toggleSidebar }: SidebarProps) {
  return (
    <Box>
      {/* Botón para abrir/cerrasr el Sidebar */}
      <IconButton
        onClick={toggleSidebar}
        sx={{
          position: 'fixed',
          top: 12,
          left: 16,
          zIndex: 1300,
          backgroundColor: 'primary.dark',
          color: 'white',
          '&:hover': { backgroundColor: '#0A1929' },
        }}
      >
        <MenuIcon />
      </IconButton>

      {/* Sidebar Drawer */}
      <Drawer anchor="left" open={isOpen} onClose={toggleSidebar}>
        <Box
          sx={{
            width: 240,
            bgcolor: '#0A1929',
            height: '100vh',
            p: 2,
            color: 'white',
          }}
        >
          <Typography variant="h6" sx={{ textAlign: 'center', mb: 2 }}>
            Dashboard
          </Typography>
          <List>
            <SidebarItem icon={<HomeIcon />} text="Inicio" />
            <SidebarItem icon={<DescriptionIcon />} text="Eventos" />
            <SidebarItem icon={<SettingsIcon />} text="Configuración" />
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}

function SidebarItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <ListItem disablePadding>
      <ListItemButton>
        <ListItemIcon sx={{ color: 'white' }}>{icon}</ListItemIcon>
        <ListItemText primary={text} sx={{ color: 'white' }} />
      </ListItemButton>
    </ListItem>
  );
}
