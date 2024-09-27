import { Stack } from '@mui/material';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

type TabLabelProps = {
  locale?: string;
  label: string;
  Icon: any;
  disabled?: boolean;
};

const TabLabel = ({ label, Icon, disabled, locale }: TabLabelProps) => {
  const { t } = useTranslation(locale);
  return (
    <Stack flexDirection={'row'} gap={1} alignItems={'center'} color={!disabled ? 'primary.main' : undefined}>
      <Icon /> {t(label)}
    </Stack>
  );
};

export default memo(TabLabel);

export const renderTabLabel = ({ ...props }: TabLabelProps) => {
  return <TabLabel {...props} />;
};
