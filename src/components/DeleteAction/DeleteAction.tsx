import { memo } from "react";
import { useTranslation } from "react-i18next";
import ConfirmRowAction from "./ConfirmRowAction";
import { DeleteOutlineOutlined } from "@mui/icons-material";

type DeleteActionProps = {
  onDelete?: () => void;
  isLoading?: boolean;
  error?: any;
  errors?: any;
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
  title?: string;
  confirmation?: string;
  disabled?: boolean;
  color?: "error" | "default" | "inherit" | "primary" | "secondary" | "info" | "success" | "warning" | undefined
};

const DeleteAction = ({
  isOpen,
  onClose,
  onOpen,
  error,
  errors,
  isLoading,
  onDelete,
  title = "common:deleteConfirmation.title",
  confirmation = "common:deleteConfirmation.confirmation",
  disabled,
  color
}: DeleteActionProps) => {
  const { t } = useTranslation();

  return (
    <ConfirmRowAction
      onOpen={onOpen}
      isOpen={isOpen}
      error={error}
      errors={errors}
      confirmationTitle={t(title)}
      confirmationMessage={t(confirmation)}
      onClose={onClose}
      isLoading={isLoading}
      onConfirm={onDelete || (() => null)}
      confirmButtonText={t("delete")}
      tooltip={t("delete")}
      icon={DeleteOutlineOutlined}
      disabled={disabled}
      color={color}
    />
  );
};

export default memo(DeleteAction);
