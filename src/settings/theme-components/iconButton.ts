declare module '@mui/material/IconButton' {
  // eslint-disable-next-line no-unused-vars
  interface IconButtonPropsSizeOverrides {
    smallGrey: true;
    mediumGrey: true;
    largeGrey: true;
  }
}

export const MuiIconButton = {
  styleOverrides: {
    sizeSmallGrey: ({ theme: { palette } }: any) => ({
      width: 28,
      height: 28,
      borderRadius: 10,
      backgroundColor: palette.grey[200],
    }),
    sizeMediumGrey: ({ theme: { palette } }: any) => ({
      width: 36,
      height: 36,
      borderRadius: 10,
      backgroundColor: palette.grey[200],
    }),
    sizeLargeGrey: ({ theme: { palette } }: any) => ({
      width: 48,
      height: 48,
      borderRadius: 10,
      backgroundColor: palette.grey[200],
    }),
  },
};
