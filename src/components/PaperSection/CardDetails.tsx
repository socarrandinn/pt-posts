import { ChildrenProps } from '@dfl/mui-react-common';
import { Grid, Paper, PaperProps, Typography } from '@mui/material';
import { memo } from 'react';

export const defaultCardDetailSx: PaperProps = {
  sx: {
    borderRadius: '10px',
    padding: {
      xs: '20px',
      md: '40px',
      xl: '40px 60px',
    },
  },
};

type CardDetailsProps = ChildrenProps & {
  title: string;
  subtitle: string;
  Action?: any;
};

const CardDetails = ({ Action, subtitle, title, children, ...props }: CardDetailsProps & PaperProps) => {
  const { sx, ...rest } = props;
  const sxProps = sx ? Object.assign({}, defaultCardDetailSx.sx, sx) : defaultCardDetailSx.sx;
  return (
    <Paper elevation={0} sx={sxProps} {...rest}>
      <Grid container spacing={{ xs: 1, md: 2 }}>
        {Action && (
          <Grid item xs={12} mb={-2} display={'flex'} justifyContent={'end'}>
            {Action}
          </Grid>
        )}
        <Grid item xs={12} md={4} lg={5}>
          <Typography variant='smallTitle'>
            {title}
          </Typography>
          <Typography color='initial'>{subtitle}</Typography>
        </Grid>
        <Grid item xs={12} md={8} lg={7}>
          {children}
        </Grid>
      </Grid>
    </Paper>
  );
};

export default memo(CardDetails);
