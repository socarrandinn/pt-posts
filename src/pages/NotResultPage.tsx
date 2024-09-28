import { Paper, useTheme } from '@mui/material';
import { memo, useMemo } from 'react'
import { Image } from '../utils/image';

import error404 from '../assets/404.svg'
import errorDark404 from '../assets/dark-404.svg'

const NotResultPage = () => {
  const theme = useTheme()
  const img = useMemo(() => theme.palette.mode === 'dark' ? errorDark404 : error404, [theme])
  return (
    <Paper sx={{
      mt: 10,
      padding: { xs: 5, md: 10 },
      img: {
        aspectRatio: 9 / 16
      }
    }}>

      <Image sx={{
        width: '100%',
        height: 300
      }} src={img} />

    </Paper>
  );

}

export default memo(NotResultPage);