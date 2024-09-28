import { grey } from '@mui/material/colors';
import { createTheme, lighten } from '@mui/material';
import { components } from './components';


export enum THEMES {
  LIGHT = 'light',
  DARK = 'dark'
}


declare module '@mui/material/styles' {
  interface Palette {
    neutral: Palette['primary'];
    formLabel: string;
    link: string;
  }

  interface PaletteOptions {
    neutral?: PaletteOptions['primary'];
  }

  interface TypographyVariants {
    dashboardTitle: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    dashboardTitle?: React.CSSProperties;
    smallTitle?: React.CSSProperties;
    mediumTitle?: React.CSSProperties;
    largeTitle?: React.CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    dashboardTitle: true;
    smallTitle: true;
    mediumTitle: true;
    largeTitle: true;
  }
}

// Extend color prop on components
declare module '@mui/material/Chip' {
  export interface ChipPropsColorOverrides {
    opacity: true;
  }
}

export const common = createTheme({
  components: {
    ...components,
    MuiTableHead: {
      styleOverrides: {
        root: ({ theme: { palette } }) => ({
          background: palette.mode === 'light' ? lighten(palette.primary.light, 0.8) : grey[800],
        }),
      },
    },
    MuiTabs: {
      styleOverrides: {
        flexContainer: {
          '.MuiButtonBase-root': {
            minWidth: 20,
            textTransform: 'none',
          },
        },
      },
    },
  },
  typography: {
    fontFamily: 'Roboto',
    h1: {
      fontSize: 18,
      fontWeight: 600,
      lineHeight: 1.6,
      letterSpacing: '0.0075em',
    },
    h2: {
      fontSize: 16,
    },
    h3: {
      fontSize: 18,
    },
    body1: {
      fontSize: 14,
    },
    body2: {
      fontSize: 13,
    },
    caption: {
      fontSize: 12,
    },

  },
});

const LIGHT = {
  ...common,
  palette: {
    mode: THEMES.LIGHT,
    sidebar: {
      background: '#091A7A',
      color: 'background.paper',
      activeColor: 'primary.light',
      active: 'transparent',
    },
    spaceSelector: '#f3f4f9',
    primary: {
      main: '#254EDB',
      light: '#ADC8FF',
      dark: '#091A7A',
    },
    opacity: {
      main: '#fdfdfd59',
      contrastText: '#fff',
    },
    grey: {
      ...grey,
      100: '#e8ecf6',
      200: '#F1F3FB',
      300: '#E2E4E7',
    },
    secondary: {
      ...grey,
      main: grey['900'],
      light: grey['400'],
    },
    neutral: {
      main: '#f5f7fa',
    },
    background: {
      default: '#f5f7fa',
      paper: '#FFFFFF',
    },
    formLabel: '#111',
    link: '#1939B7',
    text: {
      primary: '#111',
      secondary: '#222',
    },
  },
};

const DARK = {
  ...common,
  palette: {
    mode: THEMES.DARK,
    sidebar: '#111827',
    spaceSelector: '#222b36',
    background: {
      default: '#1e2732',
      paper: '#222b36',
    },
    primary: {
      main: '#ADC8FF',
      light: '#363e48',
    },
    opacity: {
      main: '#fdfdfd59',
      contrastText: '#fff',
    },
    secondary: {
      ...grey,
      main: grey['400'],
      light: grey['800'],
    },
    neutral: {
      main: grey['800'],
    },
    formLabel: '#fff',
    link: '#6690FF',
  },
};

export const THEME_SETTING = {
  [THEMES.LIGHT]: LIGHT,
  [THEMES.DARK]: DARK,
};
