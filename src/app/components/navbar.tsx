'use client';
import * as React from 'react';
import { useRouter } from 'next/navigation';
import { Person as UserIcon } from '@mui/icons-material';
import {
  AppBar,
  Toolbar,
  Menu,
  MenuItem,
  IconButton,
  Fade,
} from '@mui/material';

export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const router = useRouter();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleClose();
    router.push('/login'); // Redirigir al login
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: 'white',
        color: 'black',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
        zIndex: 1,
      }}
    >
      <Toolbar sx={{ justifyContent: 'flex-end' }}>
        <div>
          <IconButton
            id="fade-button"
            aria-controls={open ? 'fade-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            sx={{
              height: '60px',
              width: '60px',
              borderRadius: '50%',
              '&:hover': { backgroundColor: '#0A1929', color: 'white' },
              '&:focus': { outline: '#0A1929' },
            }}
          >
            <UserIcon />
          </IconButton>
          <Menu
            id="fade-menu"
            MenuListProps={{
              'aria-labelledby': 'fade-button',
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
}
