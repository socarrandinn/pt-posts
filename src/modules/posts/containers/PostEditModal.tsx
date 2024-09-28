import { memo, useCallback, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useFindOnePost } from '../hooks/useFindOnePost';
import PostCreateModal from './PostCreateModal';
import { IPost } from '../interfaces/post.interface';

const PostEditModal = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const entityId = useMemo(() => searchParams.get('edit'), [searchParams]);

  const { isLoading, data, error } = useFindOnePost(Number(entityId));

  const handleCloseEdit = useCallback(() => {
    entityId && searchParams.delete('edit');
    setSearchParams(searchParams);
  }, [entityId, searchParams, setSearchParams]);

 
  return (
    <PostCreateModal
      title={'edit'}
      open={!!entityId}
      onClose={handleCloseEdit}
      initValue={data as unknown as IPost}
      loadingInitData={isLoading}
      dataError={error}
    />
  );
};

export default memo(PostEditModal);
