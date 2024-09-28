import { TextField as MuiTextField, TextFieldProps as MuiTextFieldProps } from "@mui/material";
import FormLabel, { useFormLabel } from "../../FormLabel";


export type TextFieldProps = MuiTextFieldProps;

//component base to fix a Dom attribute warning
const MuiTextFieldBase = ({ className, ...props }: TextFieldProps) => {
    return (
        <MuiTextField className={className} {...props} />
    )
}

export const MuiTextFieldDarkField = MuiTextFieldBase


const TextField = ({ label, ...props }: TextFieldProps) => {
    const { label: inputLabel, formLabel } = useFormLabel(label);

    return (
        <FormLabel label={formLabel} required={props.required}>
            <MuiTextFieldDarkField label={inputLabel}  {...props} />
        </FormLabel>
    )
};

export default TextField;
