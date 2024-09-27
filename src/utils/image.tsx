import { Avatar, styled } from '@mui/material';

export const Image = styled(Avatar)(({ }) => ({
  height: 140,
  width: 140,
  backgroundColor: 'transparent',
  img: {
    objectFit: 'contain',
  },
}));

Image.defaultProps = {
  variant: 'square',
  alt: 'images',
};
