import { Fragment, useMemo } from 'react';
import Box from '@mui/material/Box';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import EnhancedTableHead from './TableHeader/EnhancedTableHead';
import { EnhancedTableRows, LoadingRows } from './Rows';
import { MuiTable } from './styled';
import { CardForm } from '../PaperSection';
import { CardFormPaperProps } from '../PaperSection/CardForm';
import { TableResultProps } from '../../types';
import { useTablePagination } from './hooks';
import { HeadCell } from './interfaces/table';
import SpaceRow from './Rows/SpaceRow';
import { NotResult } from '../NoResult';

export type EnhancedTableProps = TableResultProps & {
  data: any[];
  columnGroups?: HeadCell[];
  columns: HeadCell[];
  rowsPerPageOptions?: number[];
  total: number;
  isLoading?: boolean;
  isError?: boolean;
  error?: any;
  hidePagination?: boolean;
  hideRowSpace?: boolean;
  showHeadBorder?: boolean;
  minWidthTable?: number;
};

const Table = ({
  columns,
  columnGroups,
  data = [],
  total,
  isLoading,
  error,
  errorResultCmp: ErrorResultCmp,
  emptyResultCmp: EmptyResultCmp,
  rowsPerPageOptions = [3, 5, 10, 25],
  hidePagination,
  hideRowSpace = false,
  minWidthTable = 750,
  showHeadBorder = false,
}: EnhancedTableProps) => {
  const { page, rowsPerPage, onRowsPerPageChange, onPageChange } = useTablePagination();
  const ErrorResultW = ErrorResultCmp || <NotResult/>
  const EmptyResultW = EmptyResultCmp ||  <NotResult/>


  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0;

  const visibleRows = useMemo(
    () =>
      [...data]
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [page, rowsPerPage, data],
  );


  if (error) {
    return (
      <CardForm sx={{ display: 'flex', justifyItems: 'center', width: '100%', ...CardFormPaperProps.sx }}>
        <ErrorResultW error={error} />
      </CardForm>
    );
  }
  if (!isLoading && !data?.length) {
    return (
      <CardForm sx={{ display: 'flex', justifyContent: 'center', width: '100%', ...CardFormPaperProps.sx }}>
        {EmptyResultW}
      </CardForm>
    );
  }

  return (
    <Box sx={{ width: '100%' }}>
      <TableContainer>
        <MuiTable
          sx={{ minWidth: minWidthTable }}
          aria-labelledby='tableTitle'
          size={'medium'}
          showHeadBorder={showHeadBorder}
          hideRowSpace={hideRowSpace}
        >
          <EnhancedTableHead
            headCells={columns}
            headGroupCells={columnGroups || []}
            isLoading={isLoading}
            rowCount={data.length}
          />
          <TableBody className='body'>
            {isLoading && (
              <LoadingRows headCellsSize={columns.length} hideRowSpace={hideRowSpace} />
            )}
            {!isLoading &&
              visibleRows.map((row: any, index: number) => {
                // @ts-ignore
                const id = row._id || row.id;
                return (
                  <Fragment key={id}>
                    {!hideRowSpace && <SpaceRow rowCount={columns.length} />}
                    <TableRow
                      className='row'
                      tabIndex={-1}
                      key={id}
                    >
                      <EnhancedTableRows row={row} headCells={columns} rowIndex={index} />
                    </TableRow>
                  </Fragment>
                );
              })}
            {emptyRows > 0 && (
              <TableRow
                style={{
                  height: 53 * emptyRows,
                }}
              >
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
        </MuiTable>
      </TableContainer>
      {!isLoading && !hidePagination && (
        <TablePagination
          rowsPerPageOptions={rowsPerPageOptions}
          component='div'
          count={total}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={onPageChange}
          onRowsPerPageChange={onRowsPerPageChange}
        />
      )}
    </Box>
  );
};

export default Table;
