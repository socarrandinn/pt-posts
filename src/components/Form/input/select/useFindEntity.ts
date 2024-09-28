import { useQuery } from "@tanstack/react-query";
import { useMemo, useRef } from "react";

export const useFindEntity = (fetchFunc: (payload: any) => Promise<any>,
    mainQueryKey: string,
    search: string,
    options?: any,
    enabled?: boolean,
    staleTime?: number) => {
    const { filters, page, size: rowsPerPage } = options || {};
    const areAll = useRef({ areAll: false })

    const { fetch, queryKey } = useMemo(() => {
        const currentPage = page || 0;
        const size = rowsPerPage || 70;
        const overwriteSearch = areAll.current.areAll ? '' : (search || '');
        const payload = {
            search: overwriteSearch.toLowerCase(),
            filters,
            page: currentPage + 1,
            size
        }

        const fetch = async () => {
            const data = await fetchFunc(payload);
            if (!search && !currentPage && !data.hasMore) {
                areAll.current.areAll = true;
            }
            return data;
        };
        return {
            queryKey: payload,
            fetch
        }
    }, [search, page, filters, rowsPerPage]);

    return useQuery({
        queryKey: [mainQueryKey, queryKey],
        queryFn: fetch,
        enabled,
        staleTime: staleTime || 20000,
    })

}
