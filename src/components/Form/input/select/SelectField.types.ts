import {SelectProps} from "@mui/material";
import {ReactNode} from "react";

export type SelectFieldProps = SelectProps & {
    labelId?: string;
    helperText?: string;
    error?: boolean;
    label?: ReactNode | null;
}
