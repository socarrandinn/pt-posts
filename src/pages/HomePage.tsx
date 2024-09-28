import { memo } from 'react'
import PageCenterLayout from './PageCenterLayout';
import PostContainer from '../modules/posts/containers/PostContainer';
import { PostProvider } from '../modules/posts/contexts/PostContext';

const HomePage = () => {

  return (
    <PageCenterLayout>
      <PostProvider>
        <PostContainer />
      </PostProvider>
    </PageCenterLayout>
  );
}

export default memo(HomePage);