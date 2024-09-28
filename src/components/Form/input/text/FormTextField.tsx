import {FC, memo} from "react";
import TextField, {TextFieldProps} from "./TextField";
import FormFieldControl, { FormFieldControlProps } from "../../FormFieldControl";

export type FormTextFieldProps = FormFieldControlProps & TextFieldProps;

const FormTextField: FC<FormTextFieldProps> = (props) => {
    return <FormFieldControl {...props} Component={TextField}/>;
};

export default memo(FormTextField);

