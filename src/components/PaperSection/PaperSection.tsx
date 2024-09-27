import { memo } from 'react';
import { Divider, Stack, Typography } from '@mui/material';
import PaperTabView, { PaperTabViewProps } from '../TabsWithSections/PaperTabView/PaperTabView';

export type PaperSectionProps = PaperTabViewProps & {
  title?: string;
  subtitle?: string;
  helpText?: string;
  actions?: any;
  mbHeader?: string | number;
  onDivider?: boolean;
};

const PaperSection = ({
  title,
  subtitle,
  children,
  actions,
  mbHeader,
  helpText,
  onDivider,
  ...props
}: PaperSectionProps) => {
  const hasHeader = !!title || !!subtitle || !!actions;
  return (
    <PaperTabView {...props}>
      {hasHeader && (
        <Stack
          flexDirection={{ xs: 'column', sm: 'row' }}
          alignItems={{ xs: 'start', sm: 'center' }}
          justifyContent={'space-between'}
          pb={2}
        >
          <Stack>
            {!!title && (
              <Typography variant='h1' fontWeight={700}>
                {title}
              </Typography>
            )}
            {!!subtitle && <Typography>{subtitle}</Typography>}
          </Stack>
          {actions}
        </Stack>
      )}
      {onDivider && <Divider sx={{ my: 1 }} flexItem />}
      {children}
    </PaperTabView>
  );
};

export default memo(PaperSection);
