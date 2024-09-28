export const MuiDialog = {
  styleOverrides: {
    root: () => ({
      '& .MuiDialog-paper': {
        position: 'relative',
        borderRadius: '10px',
        boxShadow: 0,
        padding: '24px 16px 16px 16px',
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
    root: () => ({
      padding: '16px 24px',
      fontWeight: 700
    }),
  },
};
