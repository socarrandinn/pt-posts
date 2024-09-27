import { memo, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader } from '../components/Loading';
import MainLayout from '../layouts/MainLayout';

const RootLayoutApp = () => {

  return (
    <MainLayout>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </MainLayout>
  );
};

export default memo(RootLayoutApp);
