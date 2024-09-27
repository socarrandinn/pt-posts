import { memo } from 'react';
import { ChildrenProps } from '../common/types';
import { Container } from '@mui/material';
import Navbar from './Navbar';


const MainLayout = ({ children }: ChildrenProps) => {
  return (
    <Container>
      <Navbar />
      {children}
    </Container>
  );
};

export default memo(MainLayout);
