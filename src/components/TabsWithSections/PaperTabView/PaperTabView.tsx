import { memo } from 'react';
import { Paper } from '@mui/material';
import { ChildrenProps } from '../../../types';

export type PaperTabViewProps = ChildrenProps & { firsts?: boolean; nm?: boolean; sx?: any };

const common = { padding: { xs: 1, md: 3 }, borderRadius: '10px' };

const firstsX = {
  ...common,
  borderTopLeftRadius: 0,
  borderTopRightRadius: 0,
};

const normalSx = {
  ...common,
  marginTop: 2,
};

const PaperTabView = ({ children, firsts, nm, sx }: PaperTabViewProps) => {
  const customSx = firsts ? firstsX : nm ? common : normalSx;
  return <Paper elevation={0} sx={{ ...customSx, ...sx }}>{children}</Paper>;
};

export default memo(PaperTabView);
