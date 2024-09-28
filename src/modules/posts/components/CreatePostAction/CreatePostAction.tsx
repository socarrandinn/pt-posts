import { AddOutlined } from '@mui/icons-material';
import { Button } from '@mui/material';
import { memo } from 'react'
import { useTranslation } from 'react-i18next';
import PostCreateModal from '../../containers/PostCreateModal';
import useToggle from '../../../../hooks/useToggle';


const CreatePostAction = () => {
  const { t } = useTranslation('posts')
  const { isOpen, onOpen, onClose } = useToggle(false)
  return (
    <>
      <Button onClick={onOpen} fullWidth sx={{ maxWidth: 160 }} variant='contained' startIcon={<AddOutlined />}>
        {t('create')}
      </Button>
      <PostCreateModal open={isOpen} onClose={onClose} />
    </>
  );

}

export default memo(CreatePostAction);