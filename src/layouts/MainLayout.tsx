import { memo } from 'react';
import { Container } from '@mui/material';
import Navbar from './Navbar';
import { ChildrenProps } from '../types';


const MainLayout = ({ children }: ChildrenProps) => {
  return (
    <Container>
      <Navbar />
      {children}
    </Container>
  );
};

export default memo(MainLayout);
