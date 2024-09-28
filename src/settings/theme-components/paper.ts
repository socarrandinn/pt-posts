import { Theme } from '@mui/material';

export const MuiPaper = {
  styleOverrides: {
    root: ({ }: { theme: Theme }) => ({
      borderRadius: '10px'
    }),
  },
};
