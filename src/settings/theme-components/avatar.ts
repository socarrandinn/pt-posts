declare module '@mui/material/Avatar' {
  interface AvatarPropsVariantOverrides {
    greyRounded: true;
    whileRounded: true;
  }
}

export const MuiAvatar = {
  styleOverrides: {
    root: () => ({
      '.MuiAvatar-img': {
        objectPosition: 'top',
      },
    }),
    circular: () => ({}),
    rounded: () => ({
      borderRadius: '10px',
    }),
    square: () => ({}),
  },
};
