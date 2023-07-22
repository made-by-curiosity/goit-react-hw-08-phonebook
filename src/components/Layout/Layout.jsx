import { Outlet } from 'react-router-dom';
import { AppBar } from 'components/AppBar/AppBar';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <>
      <AppBar />

      <Suspense fallback="Loading...">
        <Outlet />
      </Suspense>
    </>
  );
};
