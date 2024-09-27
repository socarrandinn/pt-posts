import { Toaster } from 'react-hot-toast';
import { toasterOptions } from '../settings/toasterOptions';
import QueryProvider from './QueryContext';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { ChildrenProps } from '../types';
import { useSettings } from './SettingsProvider';

const AppContent = ({ children }: ChildrenProps) => {
  return (
    <>
      {children}
      <Toaster toastOptions={toasterOptions} />
      <CssBaseline />
    </>
  );
};

export const AppProvider = ({ children }: ChildrenProps) => {
  const { theme } = useSettings();
  return (
    <QueryProvider>
      <ThemeProvider theme={theme}>
        <AppContent>{children}</AppContent>
      </ThemeProvider>
    </QueryProvider>
  );
};
