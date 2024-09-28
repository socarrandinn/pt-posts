import { memo } from 'react';
import { Button } from '@mui/material';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import LanguageSelector from './LanguageSelector';

const LanguageButton = () => {
  return (
    <LanguageSelector
      component={Button}
      mini
      compProps={{ variant: 'text', color: 'background.paper' }}
      icon={<LanguageOutlinedIcon fontSize={'small'} sx={{ mt: '-2px', mr: '4px' }} />}
    />
  );
};

export default memo(LanguageButton);
