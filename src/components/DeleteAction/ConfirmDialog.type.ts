
export type ConfirmDialogProps = {
  open: boolean;
  onClose: () => void;
  onConfirm?: () => void;
  title?: string;
  confirmationMessage?: string;
  isLoading?: boolean;
  error?: any;
  errors?: any;
  confirmButtonText?: string;
};

