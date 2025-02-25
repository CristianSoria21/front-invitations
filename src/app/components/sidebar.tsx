'use client';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import DescriptionIcon from '@mui/icons-material/Description';
import SettingsIcon from '@mui/icons-material/Settings';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

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
