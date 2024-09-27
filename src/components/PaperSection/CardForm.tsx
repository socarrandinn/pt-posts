import { ChildrenProps } from '@dfl/mui-react-common';
import { Paper, PaperProps } from '@mui/material';
import { memo } from 'react';

export const CardFormPaperProps: PaperProps = {
  sx: {
    borderRadius: '10px',
    padding: {
      xs: '20px',
      md: '40px 60px',
      lg: '40px 80px',
      xl: '40px 100px',
    },
  },
};

const CardForm = ({ children, ...props }: PaperProps & ChildrenProps) => {
  const mergeSx = Object.assign({}, props, CardFormPaperProps);
  return (
    <Paper elevation={0} {...mergeSx}>
      {children}
    </Paper>
  );
};

export default memo(CardForm);
