import { memo, useCallback, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { InputAdornment } from '@mui/material';
import { SearchContainer, SearchInput, SmallIconButton } from './styled';
import { useTranslation } from 'react-i18next';
import { usePostContext } from '../../modules/posts/contexts/PostContext';



const PostSearchInput = () => {
  const { t } = useTranslation('posts');
  const { onFilter } = usePostContext()
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    onFilter?.(e.target.value);
  };

  const handleClear = useCallback(() => {
    setSearchTerm('');
    onFilter?.('');
  }, [setSearchTerm, onFilter]);


  return (
    <SearchContainer>
      <SearchInput
        onChange={handleSearch}       
        value={searchTerm}
        id={'search-posts'}
        placeholder={t('search')}
        fullWidth
        name='search'
        inputMode='search'
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <SearchIcon sx={{ ml: 2 }} />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position='start'>
              {!!searchTerm && (
                <SmallIconButton onClick={handleClear}>
                  <CloseIcon />
                </SmallIconButton>
              )}
            </InputAdornment>
          ),
        }}
        variant='outlined'
      />
    </SearchContainer>
  );
};

export default memo(PostSearchInput);
