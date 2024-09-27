import { memo } from 'react';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { useTranslation } from 'react-i18next';
import { isEmpty, get } from 'lodash';
import { TableHead } from '../styled';
import { CellAlign, CellType, HeadCell } from '../interfaces/table';

interface EnhancedTableProps {
  headCells: HeadCell[];
  headGroupCells?: HeadCell[];
  rowCount: number;
  isLoading?: boolean;
}

const cellAlign = (cell: HeadCell, field: string = 'align'): CellAlign => {
  if (get(cell, field)) return get(cell, field);
  if (cell.type === CellType.NUMBER) return CellAlign.RIGHT;
  return CellAlign.LEFT;
};

const EnhancedTableHead = (props: EnhancedTableProps) => {
  const { t } = useTranslation('common');
  const {
    headCells,
    headGroupCells
  } = props;

  return (
    <TableHead>
      {!isEmpty(headGroupCells) && (
        <TableRow>
          {headGroupCells?.map((headCell) => (
            <TableCell
              key={headCell.field as string}
              colSpan={headCell.columnSpan}
              align={cellAlign(headCell)}
              width={headCell.width}
              padding={headCell.disablePadding
                ? 'none'
                : 'normal'}
            >
              {headCell.renderHeader
                ? headCell.renderHeader(headCell.field, t)
                : headCell.translate === false
                  ? headCell.headerName
                  : t(headCell.headerName || '')}
            </TableCell>
          ))}
        </TableRow>
      )}
      <TableRow>

        {headCells.map((headCell) => {
          const headerValue = headCell.renderHeader
            ? headCell.renderHeader(headCell.field, t)
            : headCell.translate === false
              ? headCell.headerName
              : t(headCell.headerName || '');
          return (
            <TableCell
              key={headCell.field as string}
              align={cellAlign(headCell)}
              width={headCell.width}
              padding={headCell.disablePadding
                ? 'none'
                : 'normal'}
            >
              {headerValue}
            </TableCell>
          );
        })}
      </TableRow>
    </TableHead>
  );
};

export default memo(EnhancedTableHead);
