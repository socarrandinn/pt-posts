import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import notResult from '../../assets/empty.svg';
import { EmptyResult } from '../EmptyResult';



const NotResult = () => {
  const { t } = useTranslation('results');
  return (
    <EmptyResult
      image={notResult}
      p={'0 8px'}
      title={t('empty.subtitle')}
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
