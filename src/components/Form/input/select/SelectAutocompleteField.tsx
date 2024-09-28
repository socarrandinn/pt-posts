import { Autocomplete, AutocompleteProps, TextField, TextFieldProps } from "@mui/material";
import React, { memo } from "react";
import { AutocompleteRenderInputParams } from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
import get from "lodash/get";
import FormLabel, { useFormLabel } from "../../FormLabel";


export type SelectAutocompleteFieldProps =
    Omit<AutocompleteProps<any, any, any, any>, 'renderInput' | 'onChange'>
    & { 
        placeholder?: string;   
        helperText?: string;
        error?: boolean;
        loading?: boolean;
        required?: boolean;
        label?: string;
        searchProps?: TextFieldProps;
        inputProps?: any;
        onChange?: any;
        fieldValue?: string;
        inputRef?: any;
        renderInput?: (params: AutocompleteRenderInputParams) => React.ReactNode;
    }

const WrapperAutocomplete = ({ dark, ...props }: AutocompleteProps<any, any, any, any> & { dark?: boolean }) =>
    <Autocomplete {...props} />

const AutocompleteDarkField = WrapperAutocomplete


const getValue = (data: any, fieldValue?: string) => {
    if (fieldValue) {
        return get(data, fieldValue)
    }
    return data;
}

const getValues = (data: any[], fieldValue?: string) => {
    if (fieldValue) {
        return data?.map((item) => getValue(item, fieldValue))
    }
    return data;
}

const SelectAutocompleteField = ({
    label,
    helperText,
    error,
    inputRef,
    searchProps,
    inputProps,
    loading,
    required,
    renderInput,
    readOnly,
    onChange,
    fieldValue,
    disabled,
    placeholder,
    ...rest
}: SelectAutocompleteFieldProps) => {

    const { label: inputLabel, formLabel } = useFormLabel(label);

    const input = renderInput || ((params: any) => <TextField {...params}
        label={inputLabel} {...searchProps}
        helperText={helperText}
        required={required}
        placeholder={placeholder}
        InputProps={{
            ...inputProps,
            ...params.InputProps,
            autoComplete: "disabled", // disable autocomplete and autofill
            endAdornment: (
                <>
                    {loading ? <CircularProgress color="inherit"
                        size={20} /> : null}
                    {params.InputProps.endAdornment}
                </>
            )
        }}
        error={error} />);

    const readOnlyValue = readOnly || inputProps?.readOnly;

    return (
        <FormLabel label={formLabel} required={required}>
            <AutocompleteDarkField
                fullWidth
                disabled={disabled}
                loading={loading}
                readOnly={readOnlyValue}
                renderInput={input}
                {...rest}
                onChange={(_event: any, newValue: any) => {
                    const getFunc = Array.isArray(newValue) ? getValues : getValue;
                    onChange?.({ target: { value: getFunc(newValue, fieldValue) } });
                }}
            />
        </FormLabel>
    );
};

export default memo(SelectAutocompleteField);
