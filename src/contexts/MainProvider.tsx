import { ChildrenProps } from '../common/types/common';
import { AppProvider } from './AppProvider';
import { I18Provider } from './I18Context';


const MainProvider = ({ children }: ChildrenProps) => {
  return (
    <I18Provider>
      {/* <DateProvider> */}
      <AppProvider>{children}</AppProvider>
      {/*  </DateProvider> */}
    </I18Provider>

  );
};

export default MainProvider
