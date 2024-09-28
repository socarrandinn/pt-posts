import { Skeleton, Stack } from '@mui/material';
import { memo } from 'react'


const UserCellSkeleton = () => {

  return (
    <Stack gap={2} flexDirection={'row'}>
      <Skeleton variant='circular' sx={{ height: 80, width: 80 }} />
      <Stack gap={1}>
        <Skeleton variant='text' sx={{ maxWidth: 150, width: '100%' }} />
        <Skeleton variant='text' sx={{ maxWidth: 80, width: '100%' }} />
      </Stack>
    </Stack>
  );

}

export default memo(UserCellSkeleton);