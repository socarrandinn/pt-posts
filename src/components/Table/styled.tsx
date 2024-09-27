import { styled, TableHead as MuiTableHead, Table } from '@mui/material';

export const TableHead = styled(MuiTableHead)(({ theme }) => ({
  padding: 0,
  textTransform: 'uppercase',
  backgroundColor: theme.palette.background.paper,
}));

type MuiTableProps = {
  showHeadBorder?: boolean;
  hideRowSpace?: boolean;
};
export const MuiTable = styled(Table)<MuiTableProps>(({ theme, showHeadBorder, hideRowSpace }) => ({
  '& .MuiTableCell-root': {
    border: 0,
    ...(hideRowSpace
      ? {}
      : {
          ':last-child': {
            borderTopRightRadius: 5,
            borderBottomRightRadius: 5,
          },
          ':first-of-type': {
            borderTopLeftRadius: 5,
            borderBottomLeftRadius: 5,
          },
        }),
  },
  ' & .MuiTableRow-head': {
    '& .MuiTableCell-root': {
      fontWeight: 300,
      textTransform: 'uppercase',
      padding: '0 16px 0 24px',
      height: 50,
      color: theme.palette.text.secondary,
      [theme.breakpoints.down('sm')]: {
        padding: '0 8px',
      },
      ...(showHeadBorder
? { borderBottom: `1px solid ${theme.palette.divider}` }
: {}),
    },
  },
  '.row': {
    boxShadow: 0,
    backgroundColor: theme.palette.background.paper,
    ...(hideRowSpace
      ? {
          borderTop: `1px solid ${theme.palette.grey[200]}`,
        }
      : {}),
    // height: 80,
    '& .MuiTableCell-root': {
      padding: '8px 16px 8px 24px',
      [theme.breakpoints.down('sm')]: {
        padding: 8,
      },
    },
    /* ':hover': {
      boxShadow: 0,
      backgroundColor: theme.palette.grey[100],
      cursor: 'pointer',
    }, */
  },
  '.spacing:last-child': {
    display: 'none',
  },
  '.body': {
    borderSpacing: 0,
  },
}));
