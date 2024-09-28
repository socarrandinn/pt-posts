import { Skeleton, Stack } from '@mui/material';
import { memo } from 'react'


const UserCellSkeleton = () => {

  return (
    <Stack gap={0.5}>
      <Skeleton variant='text' sx={{ width: 150 }} />
      <Skeleton variant='text' sx={{ width: 80 }} />
    </Stack>
  );

}

export default memo(UserCellSkeleton);