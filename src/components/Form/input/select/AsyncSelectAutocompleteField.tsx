import {memo, useState} from 'react'
import debounce from "lodash/debounce";

import {useTranslation} from "react-i18next";
import useToggle from '../../../../hooks/useToggle';
import { useFindEntity } from './useFindEntity';
import { useFindValue } from './useFindValue';
import SelectAutocompleteField, { SelectAutocompleteFieldProps } from './SelectAutocompleteField';

export type FetchOption = {
    size?: number,
    page?: number,
    filters?: any,
}

export type AsyncSelectAutocompletedProps =
    Omit<SelectAutocompleteFieldProps, 'open' | 'onOpen' | 'onClose' | 'options' | 'loading' | 'onInputChange'>
    & {
    fetchFunc: (payload: any) => Promise<any>,
    fetchOption?: FetchOption,
    queryKey: string,
    staleTime?: number,
    loadValue?: boolean,
    fetchValueFunc?: (payload: string | string[] | any) => Promise<any>,
    mapOptions?: (options: any[]) => any[],
}


const AsyncSelectAutocompleteField = ({
                                          error,
                                          fetchFunc,
                                          fetchOption,
                                          queryKey,
                                          staleTime,
                                          value,
                                          loadValue,
                                          fetchValueFunc,
                                          helperText,
                                          disabled,
                                          mapOptions = (v) => v,
                                          ...props
                                      }: AsyncSelectAutocompletedProps) => {
    const [search, setSearch] = useState<string>('');
    const {isOpen, onOpen, onClose} = useToggle();
    const {
        isLoading,
        data,
        isError
    } = useFindEntity(fetchFunc, queryKey, search, fetchOption, isOpen, staleTime);

    const dataOptions = mapOptions(data || []);

    const {
        isLoading: valueLoading,
        data: customValue,
        isError: valueError
    } = useFindValue(fetchValueFunc, value, loadValue, staleTime, dataOptions);

    const {t} = useTranslation('common');

    return (
        <SelectAutocompleteField
            open={isOpen}
            value={customValue}
            onOpen={onOpen}
            onClose={onClose}
            disabled={valueLoading || disabled}
            options={dataOptions}
            onInputChange={debounce((_event, value) => setSearch(value), 300)}
            loading={isLoading || valueLoading}
            error={error || isError || valueError}
            helperText={valueError ? t('errors.loadValue') : helperText}
            {...props}
        />
    );

}

export default memo(AsyncSelectAutocompleteField);
