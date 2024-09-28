import { memo } from 'react';
import { Grid2, Skeleton } from '@mui/material';

const PostFormSkeleton = () => {
  return (
    <Grid2 container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Grid2 size={12}>
        <Skeleton variant='rectangular' height={35} animation='wave' />
      </Grid2>
      <Grid2 size={12}>
        <Skeleton variant='rectangular' height={35} animation='wave' />
      </Grid2>
    </Grid2>
  );
};

export default memo(PostFormSkeleton);
