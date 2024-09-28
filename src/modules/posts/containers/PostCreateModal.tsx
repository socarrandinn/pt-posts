import { Button, DialogActions, DialogContent } from '@mui/material';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { IPost } from '../interfaces/post.interface';
import usePostCreateForm from '../hooks/usePostCreateForm';
import { DialogForm } from '../../../components/Form/DialogForm';
import ConditionContainer from '../../../components/ConditionContainer';
import { PostForm, PostFormSkeleton } from '../components/PostForm';
import { LoadingButton } from '../../../components/LoadingButton';


type PostCreateModalProps = {
  open: boolean;
  dataError?: any;
  initValue?: IPost;
  loadingInitData?: boolean;
  title?: string;
  onClose: () => void;
};
const PostCreateModal = ({
  dataError,
  initValue,
  loadingInitData,
  open,
  title = 'create',
  onClose,
}: PostCreateModalProps) => {
  const { t } = useTranslation(['posts', 'common']);
  const { control, onSubmit, isPending, reset, error } = usePostCreateForm(onClose, initValue);
  const handleClose = useCallback(() => {
    onClose?.();
    reset();
  }, [onClose, reset]);
  return (
    <DialogForm
      open={open}
      onClose={handleClose}
      isLoading={loadingInitData}
      title={t(title)}
      aria-labelledby={'post-creation-title'}
    >
      <DialogContent>
      
        {!dataError && (
          <ConditionContainer active={!loadingInitData} alternative={<PostFormSkeleton />}>
            <PostForm
              error={error}
              isLoading={isPending}
              control={control}
              onSubmit={onSubmit}
            />
          </ConditionContainer>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>{t('common:cancel')}</Button>
        <LoadingButton
          variant='contained'
          type={'submit'}
          loading={isPending || loadingInitData}
          disabled={!!dataError}
          form='post-form'
        >
          {t('common:save')}
        </LoadingButton>
      </DialogActions>
    </DialogForm>
  );
};

export default memo(PostCreateModal);
