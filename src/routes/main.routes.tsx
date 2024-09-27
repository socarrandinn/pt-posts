import { lazy } from 'react';

const loadMainApp = () => import('./RootLayoutApp');
export const MainApp = lazy(loadMainApp);