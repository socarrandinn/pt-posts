import React, {memo, ReactNode} from 'react'
import {ChildrenProps} from "../../types";
import {styled, Typography} from "@mui/material";

type FormLabelProps = ChildrenProps & { label?: ReactNode | null, required?: boolean }

export const Label = styled(Typography)<{ required?: boolean }>(({required}) => {

    return required ? {
        '&:after': {
            content: "'*'",
            marginTop: '-3px'
        }
    } : {}
});

const FormLabel = ({children, label, required}: FormLabelProps) => {

    return (
        <React.Fragment>
            {label && <Label mb={1} mt={0} required={required}>{label}</Label>}
            {children}
        </React.Fragment>
    );

}

export default memo(FormLabel);

export const useFormLabel = (label: ReactNode | null | undefined) => ({
    label: label,
    formLabel: ''
})