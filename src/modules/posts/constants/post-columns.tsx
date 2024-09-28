import { LongText } from "../../../components/LongText";
import { CellAlign, HeadCell } from "../../../components/Table/interfaces/table";
import PostRowActions from "../components/PostRowActions/PostRowActions";
import { UserCell } from "../components/UserCell";
import { IPost } from "../interfaces/post.interface";

export const titleColumn: HeadCell<IPost> = {
  field: 'title',
  headerName: 'posts:fields.title',
  renderCell: (title: string) => <LongText text={title} lineClamp={2} />
};

export const bodyColumn: HeadCell<IPost> = {
  field: 'body',
  headerName: 'posts:fields.body',
  renderCell: (body: string) => <LongText text={body} lineClamp={2} />
};

export const userColumn: HeadCell<IPost> = {
  field: 'userId',
  width: 200,
  headerName: 'posts:fields.userId',
  renderCell: (userId: number) => <UserCell userId={userId} />
};

export const actionsColumn: HeadCell<IPost> = {
  field: 'actions',
  sortable: false,
  width: 100,
  headerName: 'posts:fields:actions',
  disablePadding: true,
  component: PostRowActions,
  align: CellAlign.CENTER
};

export const postColumns: Array<HeadCell<any>> = [
  titleColumn,
  bodyColumn,
  userColumn,
  actionsColumn,
];