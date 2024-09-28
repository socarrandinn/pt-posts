import { memo } from 'react';
import { Checkbox } from '@mui/material';
import { IUser } from '../../interfaces/IUsers';
import FormAsyncSelectAutocompleteField from '../../../../components/Form/input/select/FormAsyncSelectAutocompleteField';
import { UserService } from '../../services';
import { USERS_LIST_KEY } from '../../constants/query';

type SelectUsersProps = {
  name: string;
  label?: string;
  placeholder?: string;
  helperText?: string;
  multiple?: boolean;
};

const renderLabel = (option: IUser) => option.name || '';

const renderOption = (props: any, option: IUser, { selected }: any) => {
  return (
    <li {...props} key={option.id as number}>
      <Checkbox style={{ marginRight: 8 }} checked={selected} />
      {option.name}
    </li>
  );
};

export const isOptionEqualToValue = (option: any, value: any): boolean => {
  const optionId = option?.id || option;
  const valueId = value?.id || value;
  return optionId === valueId;
};

const SelectUsers = ({ name, multiple, label, placeholder, helperText }: SelectUsersProps) => {
  return (
    <FormAsyncSelectAutocompleteField
      multiple={multiple}
      label={label}
      placeholder={placeholder}
      name={name}
      disableCloseOnSelect={multiple}
      fetchFunc={() => UserService.getAllUsers()}
      fetchValueFunc={(value: number) => multiple ? UserService.getAllUsers() : UserService.getUser(value)}
      queryKey={USERS_LIST_KEY}
      autoHighlight
      id='select-users'
      getOptionLabel={renderLabel}
      renderOption={renderOption}
      helperText={helperText}
      fieldValue={'id'}
      isOptionEqualToValue={isOptionEqualToValue}
      loadValue
    />
  );
};

export default memo(SelectUsers);
