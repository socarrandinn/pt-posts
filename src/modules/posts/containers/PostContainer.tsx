import { memo } from 'react'
import { Table } from '../../../components/Table';
import { postColumns } from '../constants/post-columns';
import { useTranslation } from 'react-i18next';
import TableHeaderLayout from '../../../layouts/TableHeaderLayout';
import { usePostContext } from '../contexts/PostContext';
import PostSearchInput from '../../../components/PostSearch/PostSearchInput';
import PostEditModal from './PostEditModal';
import { Stack } from '@mui/material';
import CreatePostAction from '../components/CreatePostAction/CreatePostAction';

const PostContainer = () => {
  const { posts, isLoading, error } = usePostContext()
  const { t } = useTranslation('posts')

  return (
    <TableHeaderLayout title={t('list')}>
      <Stack gap={2} justifyContent={'space-between'} flexDirection={{ xs: 'column', md: 'row' }}>
        <PostSearchInput />
        <CreatePostAction />
      </Stack>
      <Table data={posts || []} total={posts?.length || 0} columns={postColumns} isLoading={isLoading} error={error} />
      <PostEditModal />
    </TableHeaderLayout>
  );

}

export default memo(PostContainer);