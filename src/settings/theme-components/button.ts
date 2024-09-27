declare module '@mui/material/Button' {
  // eslint-disable-next-line no-unused-vars
  interface ButtonPropsVariantOverrides {
    white: true;
    link: true;
    grey: true;
  }
}

export const MuiButton = {
  styleOverrides: {
    root: {
      fontWeight: 500,
      textTransform: 'none',
    },
    sizeLarge: ({ theme }: any) => ({
      padding: '12px 24px',
      borderRadius: 5,
    }),

    sizeMedium: ({ theme, variant }: any) => ({
      padding: '6px 16px',
      borderRadius: 5,
    }),

    sizeSmall: ({ theme, variant }: any) => ({
      padding: '4px 12px',
      borderRadius: 5,
    }),
    containedPrimary: ({ theme: { palette } }: any) => ({
      backgroundColor: palette.primary.light,
      color: palette.formLabel,
      ':hover': {
        backgroundColor: palette.primary.main,
      },
    }),
    outlinedPrimary: ({ theme: { palette } }: any) => ({}),
    textPrimary: ({ theme: { palette } }: any) => ({
      color: palette.formLabel,
    }),
    whitePrimary: ({ theme: { palette, shadows } }: any) => ({
      color: palette.formLabel,
      fontSize: 15,
      backgroundColor: palette.background.paper,
      boxShadow: shadows[1],
      ':hover': {
        backgroundColor: palette.grey[100],
      },
    }),
    greyPrimary: ({ theme: { palette } }: any) => ({
      color: palette.formLabel,
      backgroundColor: '#E6E8E7',
      ':hover': {
        backgroundColor: '#cdd1de',
      },
    }),
    linkPrimary: ({ theme: { palette } }: any) => ({
      color: palette.primary.main,
      padding: '2px !important',
      ':hover': {
        textDecoration: 'underline',
        background: 'transparent',
      },
    }),
  },
};
