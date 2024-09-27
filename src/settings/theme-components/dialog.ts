import { Theme } from '@mui/material/styles';

export const MuiDialog = {
  styleOverrides: {
    root: ({ theme }: { theme: Theme; ownerState: any }) => ({
      '& .MuiDialog-paper': {
        position: 'relative',
        borderRadius: '10px',
        boxShadow: 0,
        padding: '30px 20px 20px 20px',
      },
      '& .MuiBackdrop-root': {
        backdropFilter: 'blur(10px)',
        backgroundColor: 'rgba(198, 206, 222, 0.4)',
      },
    }),
  },
};
export const MuiDialogTitle = {
  styleOverrides: {
    root: ({ theme }: { theme: Theme; ownerState: any }) => ({
      padding: '16px 24px',
      fontWeight: 700
    }),
  },
};
