import { memo, ReactNode } from 'react'
import { ChildrenProps } from '../types';
import { Paper, Stack, Typography } from '@mui/material';
type TableHeaderLayoutProps = ChildrenProps & {
  title: string
  action?: ReactNode
}

const TableHeaderLayout = ({ children, title, action }: TableHeaderLayoutProps) => {

  return (
    <Stack gap={{ xs: 1, md: 2 }} >
      <Paper elevation={0} sx={{
        padding: { xs: 1, md: 2 },
        display: 'flex'
      }}>
        <Typography variant="h1" sx={{ fontWeight: 600 }}>{title}</Typography>
      </Paper>
      {children}
    </Stack>
  );

}

export default memo(TableHeaderLayout);