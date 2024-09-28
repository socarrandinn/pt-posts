import { memo, useCallback } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { ConfirmDialogProps } from './ConfirmDialog.type';
import { LoadingButton } from '../LoadingButton';

const ConfirmDialog = ({
  open,
  onClose,
  title,
  confirmationMessage,
  onConfirm,
  isLoading,
  confirmButtonText,
}: ConfirmDialogProps) => {
  const { t } = useTranslation('common');

  const handleConfirm = useCallback(() => {
    onConfirm?.();
  }, [onConfirm]);

  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
    >
      <DialogTitle id='alert-dialog-title'>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id='alert-dialog-description'>{confirmationMessage}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>{t('cancel')}</Button>
        <LoadingButton onClick={handleConfirm} autoFocus variant={'contained'} color={'error'} loading={isLoading}>
          {confirmButtonText || t('confirm')}
        </LoadingButton>
      </DialogActions>
    </Dialog>
  );
};

export default memo(ConfirmDialog);
