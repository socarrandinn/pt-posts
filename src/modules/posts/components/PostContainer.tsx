import { memo } from 'react'
import { useFindPosts } from '../hooks/useFindPosts';
import { Table } from '../../../components/Table';
import { postColumns } from '../constants/post-columns';
import { useTranslation } from 'react-i18next';
import { NotResult } from '../../../components/NoResult';
import TableHeaderLayout from '../../../layouts/TableHeaderLayout';



const PostContainer = () => {
  const { data, isLoading, error } = useFindPosts()
  const { t } = useTranslation('post')

  return (
    <TableHeaderLayout title={t('list')}>
      <Table data={data} total={data?.length} columns={postColumns} isLoading={isLoading} error={error} emptyResultCmp={<NotResult />} />
    </TableHeaderLayout>
  );

}

export default memo(PostContainer);