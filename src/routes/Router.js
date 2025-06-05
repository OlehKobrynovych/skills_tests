import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import Loadable from '../layouts/full/shared/loadable/Loadable';

/* ***Layouts**** */
const FullLayout = Loadable(lazy(() => import('../layouts/full/FullLayout')), 'full-preloader'); 
const BlankLayout = Loadable(lazy(() => import('../layouts/blank/BlankLayout')), 'full-preloader');

/* ****Pages***** */
const HomeView = Loadable(lazy(() => import('../views/HomeView/HomeView')))
const Error = Loadable(lazy(() => import('../views/authentication/Error')), 'full-preloader');

const Router = [
  {
    path: '/',
    element: <FullLayout />,
    children: [
      { path: '/', exact: true, element: <HomeView /> },
      { path: '*', element: <Navigate to="/auth/404" /> },
    ],
  },
  {
    path: '/auth',
    element: <BlankLayout />,
    children: [
      { path: '404', element: <Error /> },
      { path: '*', element: <Navigate to="/auth/404" /> },
    ],
  },
];

export default Router;
