import { FC, memo } from 'react'
import PageLayout, { PageLayoutProps } from './PageLayout';


const PageCenterLayout: FC<PageLayoutProps> = ({ children }: PageLayoutProps) => {

  return (
    <PageLayout sx={{maxWidth: 900, marginX: 'auto'}}>
      {children}
    </PageLayout>
  );

}

export default memo(PageCenterLayout);