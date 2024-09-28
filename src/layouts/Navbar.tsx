import { AppBar, Box, IconButton, Toolbar } from '@mui/material';
import { memo } from 'react'
import { Home } from '@mui/icons-material'
import ThemeButton from '../components/ThemeButton';
import { useSettings } from '../contexts/SettingsProvider';
import LanguageButton from '../components/LenguageSelector/LanguageButton';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { toggleTheme, settings } = useSettings();
  return (
    <AppBar position="static"
      sx={{
        maxWidth: 500,
        width: '100%',
        marginX: 'auto',
        borderRadius: 20,
        minHeight: 60, mt: 2
      }}>
      <Toolbar>
        <Box sx={{ flex: 1 }} >
          <Link to={'/'} style={{ color: '#fff', alignItems: 'center' }} >
            <IconButton edge="start" color="inherit" aria-label="menu">
              <Home />
            </IconButton>
          </Link>
        </Box>
        <LanguageButton />
        <ThemeButton toggle={toggleTheme} current={settings.theme} />
      </Toolbar>
    </AppBar>
  );

}

export default memo(Navbar);