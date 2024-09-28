import { memo, ReactNode } from 'react'
import { ChildrenProps } from '../types';
import { Stack, Typography } from '@mui/material';

type TableHeaderLayoutProps = ChildrenProps & {
  title: string
  action?: ReactNode
}

const TableHeaderLayout = ({ children, title }: TableHeaderLayoutProps) => {

  return (
    <Stack gap={{ xs: 1, md: 2 }} mt={3} >
      <Typography variant="h2" sx={{ fontWeight: 600 }}>{title}</Typography>
      {children}
    </Stack>
  );

}

export default memo(TableHeaderLayout);