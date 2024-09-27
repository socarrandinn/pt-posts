import { useCallback, ChangeEvent } from 'react';
import { useSearchParams } from 'react-router-dom';
import { parseNumber } from '../../../utils';
import { useSearchParamsChange } from './useParamsLink';



export const useTablePagination = () => {
    const [searchParams] = useSearchParams();
    const { update } = useSearchParamsChange();
    const page = parseNumber(searchParams.get('page'), 0);
    const rowsPerPage = parseNumber(searchParams.get('size'), 10);

    const onPageChange = useCallback((_event: unknown, newPage: number) => {
        update({ page: newPage.toString() })
    }, [update]);

    const onRowsPerPageChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        const size = parseInt(event.target.value, 10).toString();
        update({ page: '0', size })
    }, [update]);

    return {
        page: page,
        rowsPerPage: rowsPerPage,
        onPageChange,
        onRowsPerPageChange
    }
}
