import { AppBar, Box, IconButton, Toolbar } from '@mui/material';
import { memo } from 'react'
import { Home } from '@mui/icons-material'
import ThemeButton from '../components/ThemeButton';
import { useSettings } from '../contexts/SettingsProvider';

const Navbar = () => {
  const { toggleTheme, settings } = useSettings();
  return (
    <AppBar position="static"
      sx={{
        maxWidth: 400,
        width: '100%',
        marginX: 'auto',
        borderRadius: 20,
        minHeight: 60, mt: 2
      }}>
      <Toolbar>
        <Box sx={{ flex: 1 }} >
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <Home />
          </IconButton>
        </Box>
        <ThemeButton toggle={toggleTheme} current={settings.theme} />
      </Toolbar>
    </AppBar>
  );

}

export default memo(Navbar);