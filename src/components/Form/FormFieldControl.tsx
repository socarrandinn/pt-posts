import {FC, memo} from 'react';
import {useTranslation} from 'react-i18next';
import {InputBaseComponentProps} from "@mui/material";
import {Control, Controller} from 'react-hook-form';
import { useCustomForm } from './Form';

export type FormFieldControlProps = {
    Component?: any,
    control?: Control<any, any>,
    name: string,
    isLoading?: boolean,
    error?: boolean,
    disabled?: boolean,
    readOnly?: boolean,
    inputProps?: InputBaseComponentProps | undefined
}

const FormFieldControl: FC<FormFieldControlProps> = ({control, name, Component, inputProps, error, ...props}) => {
    const {t} = useTranslation('errors');
    const {isLoading, readOnly, disabled, control: superControl, size} = useCustomForm();

    return (
        <Controller
            name={name}
            control={superControl || control}
            render={({fieldState, field: {ref, ...rest}}) => (
                <Component
                    fullWidth
                    inputRef={ref}
                    disabled={isLoading || disabled || props.isLoading}
                    inputProps={{readOnly: readOnly || props.readOnly, ...inputProps}}
                    size={size}
                    {...rest}
                    {...props}
                    error={error || Boolean(fieldState.invalid)}
                    // @ts-ignore
                    helperText={t(fieldState?.error?.message) || props.helperText}
                />
            )}
        />
    );
};

export default memo(FormFieldControl);
