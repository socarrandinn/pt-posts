import { Stack } from '@mui/material';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { RowActions } from '../../../../components/RowAction';
import { Edit } from '@mui/icons-material';
import { useParamsLink } from '../../../../components/Table/hooks/useParamsLink';
import DeleteAction from '../../../../components/DeleteAction/DeleteAction';
import useToggle from '../../../../hooks/useToggle';
import { useDeletePost } from '../../hooks/useDeletePost';

type UserStatusProps = {
  rowId: number;
};

const PostRowActions = ({ rowId }: UserStatusProps) => {
  const { t } = useTranslation('common');
  const { isOpen, onClose, onOpen } = useToggle();
  const handleEdit = useParamsLink({ edit: rowId });
  const { mutate, isPending, error } = useDeletePost(rowId, onClose);
  return (
    <>
      <Stack direction='row' spacing={1} alignItems={'centre'} justifyContent={'center'}>
        <RowActions icon={Edit} onClick={handleEdit} tooltip={t('edit')} />
        <DeleteAction
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={onClose}
          error={error}
          isLoading={isPending}
          onDelete={mutate}
          color='error'
        />
      </Stack>
    </>
  );
};

export default memo(PostRowActions);
