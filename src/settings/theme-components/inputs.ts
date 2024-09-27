import { Theme } from '@mui/material/styles';

export const MuiFormControl = {
  defaultProps: {
    // The props to change the default for.
    variant: 'outlined',
  },
  styleOverrides: {
    root: ({ theme }: { theme: Theme }) => ({
      '&.MuiFormLabel-root, .MuiInputLabel-root, .MuiInputLabel-formControl': {
        color: theme.palette.formLabel,
        '&.Mui-focused': {
          color: theme.palette.primary.main,
        },
        fontWeight: 500,
      },
    }),
  },
};

export const MuiTextField = {
  defaultProps: {
    // The props to change the default for.
    // variant: 'filled',
  },
};

export const MuiInputBase = {
  styleOverrides: {
    root: ({ theme }: { theme: Theme }) => ({
      '&.MuiOutlinedInput-root': {
        '&:hover .MuiOutlinedInput-notchedOutline': {
          borderColor: theme.palette.primary.main,
        },

        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
          borderColor: theme.palette.primary.main,
        },
      },
    }),
  },
};
