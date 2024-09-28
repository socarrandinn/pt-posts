import MuiLoadingButton, {LoadingButtonProps} from "@mui/lab/LoadingButton";
import { Button } from "@mui/material";

const LoadingButton = ({ loading, ...props }: LoadingButtonProps) => {
  if (loading) return <MuiLoadingButton {...props} loading />;

  return <Button {...props} />;
};

export default LoadingButton