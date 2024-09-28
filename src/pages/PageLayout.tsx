import { styled, PaperProps, Box } from '@mui/material';
import { FC, memo } from 'react'
import { ChildrenProps } from '../types';

const Container = styled(Box)(({ theme }) => ({
  padding: '24px 16px',
  [theme.breakpoints.down('sm')]: {
    padding: 0
  }
}))

export type PageLayoutProps = PaperProps & ChildrenProps & {

}


const PageLayout: FC<PageLayoutProps> = ({ children, ...props }: PageLayoutProps) => {

  return (
    <Container {...props}>
      {children}
    </Container>
  );

}

export default memo(PageLayout);