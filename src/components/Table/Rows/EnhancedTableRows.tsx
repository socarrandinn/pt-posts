
import get from 'lodash/get';
import TableCell from '@mui/material/TableCell';
import { Link } from '@mui/material';
import { CellType, HeadCell } from '../interfaces/table';

type TableRowsProps = {
  headCells: HeadCell[];
  row: any;
  rowIndex?: number;
};
const numberFormat = new Intl.NumberFormat('en');
export const renderValue = (cellSetting: HeadCell, row: any, rowIndex?: number) => {
  const value = get(row, cellSetting.field);
  if (cellSetting.renderCell) {
    return cellSetting.renderCell(value, row, rowIndex);
  }
  if (cellSetting.component) {
    const Cell = cellSetting.component;
    return <Cell value={value} rowId={row._id || row.id} record={row} rowIndex={rowIndex} />;
  }

  switch (cellSetting.type) {
   /*  case CellType.DATE: {
      return <DateValue value={value} format={cellSetting.format} />;
    } */
    case CellType.EMAIL: {
      return <Link href={`mailto:${value as string}`}>{value}</Link>;
    }
    case CellType.PHONE: {
      return <Link href={`tel:${value as string}`}>{value}</Link>;
    }
    case CellType.NUMBER: {
      return value && numberFormat.format(value);
    }
    /* case CellType.CURRENCY: {
      return <CurrencyValue value={value} />;
    } */
    case CellType.IMAGE: {
      return <img src={value} alt='' width={50} />;
    }
    default:
      return value;
  }
};

const EnhancedTableRows = ({ headCells, row, rowIndex }: TableRowsProps) => {
  return (
    <>
      {headCells.map((cellSetting) => {
        const value = renderValue(cellSetting, row, rowIndex);
        const align = cellSetting.align || (cellSetting.type === CellType.NUMBER ? 'right' : 'left');
        return (
          <TableCell
            align={align}
            className={cellSetting.cellClassName}
            padding={cellSetting.disablePadding ? 'none' : 'normal'}
            key={cellSetting.field as string}
          >
            {value}
          </TableCell>
        );
      })}
    </>
  );
};

export default EnhancedTableRows;
