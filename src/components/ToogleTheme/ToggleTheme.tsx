import { memo } from 'react'
import { IconButton } from '@mui/material';
import { DarkMode, LightMode } from '@mui/icons-material';
import { useSettings } from '../../contexts/SettingsProvider';
import { THEMES } from '../../settings/theme';

const ToggleTheme = () => {
  const { settings, toggleTheme } = useSettings()


  return (
    <IconButton onClick={() => toggleTheme()}>
      {settings.theme === THEMES.DARK
        ? <DarkMode />
        : <LightMode sx={{ color: 'background.paper' }} />}
    </IconButton>
  )
}

export default memo(ToggleTheme);