declare module '@mui/material/Avatar' {
  interface AvatarPropsVariantOverrides {
    greyRounded: true;
    whileRounded: true;
  }
}

export const MuiAvatar = {
  styleOverrides: {
    root: ({ theme }: any) => ({
      '.MuiAvatar-img': {
        objectPosition: 'top',
      },
    }),
    greyRounded: ({ theme }: any) => ({
      borderRadius: '10px',
      backgroundColor: theme.palette.grey[200],
    }),
    whileRounded: ({ theme }: any) => ({
      borderRadius: '10px',
      backgroundColor: theme.palette.background.paper,
    }),
    circular: ({ theme }: any) => ({}),
    rounded: ({ theme }: any) => ({
      borderRadius: '10px',
    }),
    square: ({ theme }: any) => ({}),
  },
};
