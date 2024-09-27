import { AvatarProps, Stack, Typography } from '@mui/material';
import { memo } from 'react';
import { Image } from '../../utils/image';

type EmptyResultProps = {
  image?: string;
  title: any;
  subtitle: any;
  Actions?: any;
  p?: any;
  imageProps?: AvatarProps;
};

const EmptyResult = ({ image, subtitle, title, Actions, p, imageProps }: EmptyResultProps) => {
  return (
    <Stack
      sx={{
        padding: p ?? 4,
        alignItems: 'center',
        width: '100%',
        gap: 1,
      }}
    >
      <Image {...imageProps} src={image} />
      {title && <Typography variant='mediumTitle'>{title}</Typography>}
      {subtitle && (
        <Typography textAlign={'center'} mb={2}>
          {subtitle}
        </Typography>
      )}
      {Actions}
    </Stack>
  );
};

export default memo(EmptyResult);
