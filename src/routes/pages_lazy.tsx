import { lazy } from 'react';


const loadHomePage = () => import('../pages/HomePage');
export const HomePage = lazy(loadHomePage);

const loadNotResultPage = () => import('../pages/NotResultPage');
export const NotResultPage = lazy(loadNotResultPage);
