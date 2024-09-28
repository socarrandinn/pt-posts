import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";


type FetchFuncType = ((payload: string | string[] | any) => Promise<any>) | undefined

const buildSingleFetch = (value: number, fetchFunc: FetchFuncType, dataOptions?: any[]) => {
    const fetch = () => {
        if (dataOptions && dataOptions.length) {
            const valueFound = dataOptions.find(item => item?.id === value);
            if (valueFound)
                return valueFound;
        }
        return fetchFunc?.(value);
    };

    const isEnabled = (value && fetchFunc) ? typeof value === 'number' : false;

    return { fetch, isEnabled }
}

const buildMultiFetch = (values: number[], fetchFunc: FetchFuncType, dataOptions?: any[]) => {
    const payload = {
        filters: {
            type: 'IN',
            field: '_id',
            value: values,
            objectId: true
        },
        size: values.length
    }

    const fetch = async () => {
        if (dataOptions && dataOptions.length) {
            const valueFound = values.map(value => dataOptions.find(item => item?.id === value)).filter(value => !!value)
            if (valueFound && valueFound.length === values.length)
                return valueFound;
        }
        const found = await fetchFunc?.(payload);
        return found?.hasOwnProperty('hasMore') && found?.hasOwnProperty('total') ? found.data : found;
    };

    const isEnabled = (values && values.length && fetchFunc) ? !values.some(value => typeof value !== 'number') : false;
    return { fetch, isEnabled };
}


export const useFindValue = (fetchFunc: FetchFuncType,
    value: number | number[],
    enabled?: boolean,
    staleTime?: number,
    dataOptions?: any[]) => {

    const { fetch, isEnabled } = useMemo(() => {
        if (!Array.isArray(value))
            return buildSingleFetch(value, fetchFunc, dataOptions);
        return buildMultiFetch(value, fetchFunc, dataOptions);
    }, [value, fetchFunc, dataOptions]);


    const {
        isLoading,
        data,
        isError,
    } = useQuery({
        queryKey: [value],
        queryFn: fetch,
        enabled: Boolean(enabled) && isEnabled,
        staleTime: staleTime || 20000

    });

    if (enabled && isEnabled) {
        return {
            isLoading,
            data: data || value,
            isError
        }
    }

    return {
        isLoading: false,
        data: value,
        isError: false
    }
}
