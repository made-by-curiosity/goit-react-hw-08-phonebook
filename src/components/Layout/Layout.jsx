import { Outlet } from 'react-router-dom';
import { AppBar } from 'components/AppBar/AppBar';
import { Container } from 'components/Container/Container';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <Container>
      <AppBar />
      <Suspense fallback="Loading...">
        <Outlet />
      </Suspense>
    </Container>
  );
};
