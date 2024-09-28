import { memo } from 'react';
import { RowActions } from '../RowAction';
import ConfirmDialog from './ConfirmDialog';


type ConfirmActionProps = {
  onConfirm: () => void;
  isLoading?: boolean;
  error?: any;
  errors?: any;
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
  confirmationTitle?: string;
  confirmationMessage?: string;
  tooltip?: string;
  icon?: any;
  confirmButtonText?: string;
  disabled?: boolean;
  color?: "error" | "default" | "inherit" | "primary" | "secondary" | "info" | "success" | "warning" | undefined
};

const ConfirmRowAction = ({
  isOpen,
  onClose,
  onOpen,
  error,
  errors,
  confirmationTitle,
  confirmationMessage,
  isLoading,
  onConfirm,
  tooltip,
  icon,
  confirmButtonText,
  disabled,
  color
}: ConfirmActionProps) => {
  return (
    <>
      <RowActions icon={icon} onClick={onOpen} tooltip={tooltip || ''} disabled={disabled} color={color} />

      <ConfirmDialog
        open={isOpen}
        error={error}
        errors={errors}
        title={confirmationTitle}
        confirmationMessage={confirmationMessage}
        onClose={onClose}
        isLoading={isLoading}
        onConfirm={onConfirm}
        confirmButtonText={confirmButtonText}
      />
    </>
  );
};

export default memo(ConfirmRowAction);
