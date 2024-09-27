import {useCallback} from 'react';
import { useSearchParamsChange } from './useParamsLink';


export const useTableViewFilter = (defaultValue?: string) => {
    let {replace, value} = useSearchParamsChange('fview');

    const setFilterView = useCallback((value: string, extra: any = {}) => {
        const params: { fview?: string, page: string } = {...extra, page: '0'};
        if (value)
            params.fview = value;

        replace(params);
    }, [replace]);

    return {
        filter: value ? value as string : defaultValue,
        setFilterView,
    }
}
