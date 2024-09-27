import { memo, useState } from 'react'
import { Table } from '../../../components/Table';
import { postColumns } from '../constants/post-columns';
import { useTranslation } from 'react-i18next';
import { NotResult } from '../../../components/NoResult';
import TableHeaderLayout from '../../../layouts/TableHeaderLayout';
import { usePostContext } from '../contexts/PostContext';



const PostContainer = () => {
  const { posts, isLoading, error, onFilter } = usePostContext()
  const { t } = useTranslation('post')

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    onFilter?.(e.target.value);
  };

  return (
    <TableHeaderLayout title={t('list')}>
      <input
        type="text"
        placeholder="Search by title or body"
        value={searchTerm}
        onChange={handleSearch}
      />
      <Table data={posts || []} total={posts?.length || 0} columns={postColumns} isLoading={isLoading} error={error} emptyResultCmp={<NotResult />} />
    </TableHeaderLayout>
  );

}

export default memo(PostContainer);