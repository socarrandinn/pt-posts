import { CircularProgress, Stack } from '@mui/material';
import { memo } from 'react'


const Loader = () => {

  return (
    <Stack height={'100vh'} width={'100%'} justifyContent={'center'} alignItems={'center'}>
      <CircularProgress />
    </Stack>
  );

}

export default memo(Loader);


