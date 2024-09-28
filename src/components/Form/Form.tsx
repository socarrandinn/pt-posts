import React, {createContext, useContext} from 'react';
import { ChildrenProps } from '../../types';

// Data value of the provider context
type FormContextValue = {
    isLoading?: boolean
    disabled?: boolean
    readOnly?: boolean
    size?: 'small' | 'middle' | 'large'
    control?: any,
    dark?: boolean,
    formState?: any,
    watch?: (field: string) => any,
    setValue?: (field: string) => any,
}

const defaultValue: FormContextValue = {
    isLoading: false, disabled: false, readOnly: false
}

const FormContext = createContext<FormContextValue>(defaultValue);


type FormContextProps = FormContextValue & ChildrenProps &
    React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>;

/**
 * Provider component
 * */
const Form = ({
                  isLoading,
                  size,
                  disabled,
                  readOnly,
                  control,
                  dark,
                  watch,
                  setValue,
                  formState,
                  ...props
              }: FormContextProps) => {

    return (
        <FormContext.Provider value={{isLoading, disabled, readOnly, control, size, dark, watch, setValue, formState}}>
            <form {...props}/>
        </FormContext.Provider>
    );
}


// Default hook to retrieve context data
const useCustomForm = () => {
    const context = useContext(FormContext);
    if (context === undefined) {
        return defaultValue;
    }
    return context;
}

export {Form, useCustomForm};
