import { memo } from 'react'
import { IPost } from '../../interfaces/post.interface';
type PostActionsProps = {
  rowId: string,
  record: IPost
}

const PostActions = ({ record, rowId }: PostActionsProps) => {

  return (
    <div>{rowId}</div>
  );

}

export default memo(PostActions);