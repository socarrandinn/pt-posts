import {useCallback} from 'react';
import { useSearchParamsChange } from './useParamsLink';


export const useTableSearch = () => {
    let {update, value: query} = useSearchParamsChange("q");

    const setQuery = useCallback((value: string) => {
        let removedField: string | undefined = undefined;
        const params: any = {};

        if (!value?.trim())
            removedField = 'q'
        else
            params.q = value?.trim();

        params.page = '0';

        if (query !== value)
            update(params, removedField);
    }, [update, query]);

    return {
        query,
        setQuery,
    }
}
