import { createContext } from 'react';
import { THEMES } from '../settings/theme';

export type ThemeSettingType = {
  theme: THEMES
  responsiveFontSizes: boolean
}
export type ThemesOptionsType = {
  [THEMES.LIGHT]?: any
  [THEMES.DARK]?: any
}

interface SettingsContextProps {
  settings: ThemeSettingType;
  saveSettings: (settings: ThemeSettingType) => void;
}


export const initialSettings: ThemeSettingType = {
  theme: THEMES.LIGHT,
  responsiveFontSizes: true,
};

export const SettingsContext = createContext<SettingsContextProps>({
  settings: initialSettings,
  saveSettings: (_settings: ThemeSettingType) => { },
}); 
