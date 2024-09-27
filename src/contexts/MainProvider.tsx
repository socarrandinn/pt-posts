import { ChildrenProps } from '../types';
import { AppProvider } from './AppProvider';
import { I18Provider } from './I18Context';
import SettingsProvider from './SettingsProvider';


const MainProvider = ({ children }: ChildrenProps) => {
  return (
    <SettingsProvider>
      <I18Provider>
        <AppProvider>{children}</AppProvider>
      </I18Provider>
    </SettingsProvider>

  );
};

export default MainProvider
