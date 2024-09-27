import { Theme } from '@mui/material/styles';

declare module '@mui/material/Chip' {
  interface ChipPropsVariantOverrides {
    grey: true;
  }
}

export const MuiChip = {
  styleOverrides: {
    root: ({ theme }: { theme: Theme; ownerState: any }) => ({
      borderRadius: 5,
      fontWeight: 500,
      textTransform: 'none',
      color: theme.palette.formLabel,
      fontSize: 14,
      minHeight: 32,
    }),
  },
  variants: [
    {
      props: { variant: 'filled', size: 'medium' },
      sx: ({ theme }: { theme: Theme }) => ({
        backgroundColor: theme.palette.grey[200],
      }),
    },
  ],
};
