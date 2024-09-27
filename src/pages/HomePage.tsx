import { memo } from 'react'
import PageCenterLayout from './PageCenterLayout';
import PostContainer from '../modules/posts/components/PostContainer';

const HomePage = () => {

  return (
    <PageCenterLayout>
      <PostContainer />
    </PageCenterLayout>
  );
}

export default memo(HomePage);