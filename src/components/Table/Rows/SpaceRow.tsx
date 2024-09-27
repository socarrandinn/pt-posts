import { TableCell, TableRow } from '@mui/material';
import { memo } from 'react';

const SpaceRow = ({ rowCount }: { rowCount: number }) => {
  return (
    <TableRow className='spacing'>
      <TableCell
        sx={{ height: { xs: 4, md: 8 }, padding: 0 }}
        component='th'
        scope='row'
        colSpan={rowCount}
      ></TableCell>
    </TableRow>
  );
};

export default memo(SpaceRow);
