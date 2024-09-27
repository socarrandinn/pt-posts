import { memo } from 'react';
import { es, enUS } from 'date-fns/locale';
import { ChildrenProps } from '../common/types/common';
import { useTranslation } from 'react-i18next';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DateSettingsProvider } from './DateSettingsContext';

type DateProviderProps = ChildrenProps;

const localeMap = {
  es: es,
  en: enUS,
};
const DateProvider = ({ children }: DateProviderProps) => {
  const { i18n } = useTranslation('locales');
  const locale = i18n?.language;
  return (
    <DateSettingsProvider localeMap={localeMap} locale={locale}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        {children}
      </LocalizationProvider>
    </DateSettingsProvider>
  );
};

export default memo(DateProvider);
