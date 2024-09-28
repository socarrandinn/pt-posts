import { FormControl, InputLabel, Select } from "@mui/material";
import { memo, ReactNode } from "react";
import { SelectFieldProps } from "./SelectField.types";
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel, { useFormLabel } from "../../FormLabel";

const scapeId = (label?: ReactNode | null) => {
    return typeof label === 'string' ? (label.replace(/ /g, '-') || '') : '';
}

const WrapperSelect = ({ ...props }: SelectFieldProps) => <Select {...props} />

const SelectField = ({ labelId, label, id, helperText, error, size, ...rest }: SelectFieldProps) => {
    const idSelect = id || scapeId(label);
    const idLabel = labelId || idSelect + '-label';
    const { label: inputLabel, formLabel } = useFormLabel(label);

    return (
        <FormLabel label={formLabel} required={rest.required}>
            <FormControl fullWidth error={error} size={size}>
                {inputLabel && <InputLabel id={idLabel}>{inputLabel}</InputLabel>}
                <WrapperSelect
                    variant={'outlined'}
                    labelId={idLabel}
                    id={idSelect}
                    label={inputLabel}
                    {...rest}
                />
                {helperText && <FormHelperText>{helperText}</FormHelperText>}
            </FormControl>
        </FormLabel>
    );
};

export default memo(SelectField);
