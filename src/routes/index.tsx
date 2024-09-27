import { memo } from 'react';
import { RouterProvider } from 'react-router-dom';
import { routers } from './routes';


const Routes = () => {
  return (
    <RouterProvider router={routers} />
  );
};

export default memo(Routes);
