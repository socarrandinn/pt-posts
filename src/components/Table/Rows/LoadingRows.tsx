import { Fragment, memo, useMemo } from 'react';
import { Skeleton } from '@mui/material';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import SpaceRow from './SpaceRow';

type LoadingRowsProps = {
  headCellsSize: number;

  hideRowSpace: boolean;
};

const loadingData = [1, 2, 3, 4, 5, 6, 7];

const LoadingRows = ({ headCellsSize = 5, hideRowSpace }: LoadingRowsProps) => {
  const heads = useMemo(() => {
    const data = [];
    for (let i = 0; i < headCellsSize; i++) {
      data.push(
        <TableCell key={i} padding={'normal'}>
          <Skeleton variant='text' />
        </TableCell>,
      );
    }
    return data;
  }, [headCellsSize]);

  return (
    <>
      {loadingData.map((v, index) => (
        <Fragment key={v}>
          {!hideRowSpace && <SpaceRow rowCount={headCellsSize} />}
          <TableRow key={index} sx={{ backgroundColor: '#fff', mt: 1 }}>
            {heads}
          </TableRow>
        </Fragment>
      ))}
    </>
  );
};

export default memo(LoadingRows);
