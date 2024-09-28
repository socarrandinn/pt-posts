import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { EmptyResult } from '../EmptyResult';
import { useTheme } from '@mui/material';
import empty from '../../assets/empty.svg'
import darkEmpty from '../../assets/dark-empty.svg'


const NotResult = () => {
  const { t } = useTranslation('results');
  const theme = useTheme()
  const image = useMemo(() => theme.palette.mode == 'dark' ? darkEmpty:empty , [theme])
  return (
    <EmptyResult
      image={image}
      p={'0 8px'}
      title={t('empty.title')}
      subtitle={t('empty.subtitle')}
      imageProps={{
        sx: {
          height: { xs: 80, md: 120 },
          width: { xs: 90, md: 140 },
        },
      }}
    />
  );
};

export default memo(NotResult);
