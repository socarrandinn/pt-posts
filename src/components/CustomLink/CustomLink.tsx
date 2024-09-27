import { Button, ButtonProps, LinkProps, Link as MuiLink } from '@mui/material';
import { Link, LinkProps as RouterLinkProps } from 'react-router-dom';

type ReactButtonProps = ButtonProps & RouterLinkProps & {
  href?: string
};
type ReactLinkProps = LinkProps & RouterLinkProps & {
  href?: string
};

export const CustomButtonLink = ({ to, href, ...props }: ReactButtonProps) => {
  return (
    //@ts-ignore
    <Button {...props} component={Link} to={to || href} />
  );
};

export const CustomLink = ({ to, href, ...props }: ReactLinkProps) => {
  return (
    //@ts-ignore
    <MuiLink {...props} component={Link} to={to || href} />
  );
};

