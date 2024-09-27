import { HeadCell } from "../../../components/Table/interfaces/table";
import PostActions from "../components/PostActions/PostActions";
import { IPost } from "../interfaces/post.interface";

export const titleColumn: HeadCell<IPost> = {
  field: 'title',
  headerName: 'posts:fields.title',
};
export const bodyColumn: HeadCell<IPost> = {
  field: 'body',
  headerName: 'posts:fields.body',
};

export const actionsColumn: HeadCell<IPost> = {
  field: 'actions',
  sortable: false,
  width: 120,
  headerName: 'posts:fields:actions',
  disablePadding: true,
  component: PostActions,
};

export const postColumns: Array<HeadCell<any>> = [
  titleColumn,
  bodyColumn,
  actionsColumn,
];