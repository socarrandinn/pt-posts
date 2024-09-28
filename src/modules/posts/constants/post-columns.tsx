import { LongText } from "../../../components/LongText";
import { HeadCell } from "../../../components/Table/interfaces/table";
import PostRowActions from "../components/PostRowActions/PostRowActions";
import { IPost } from "../interfaces/post.interface";

export const titleColumn: HeadCell<IPost> = {
  field: 'title',
  headerName: 'posts:fields.title',
};
export const bodyColumn: HeadCell<IPost> = {
  field: 'body',
  headerName: 'posts:fields.body',
  renderCell: (body: string) => <LongText text={body} lineClamp={2} />
};

export const actionsColumn: HeadCell<IPost> = {
  field: 'actions',
  sortable: false,
  width: 120,
  headerName: 'posts:fields:actions',
  disablePadding: true,
  component: PostRowActions,
};

export const postColumns: Array<HeadCell<any>> = [
  titleColumn,
  bodyColumn,
  actionsColumn,
];