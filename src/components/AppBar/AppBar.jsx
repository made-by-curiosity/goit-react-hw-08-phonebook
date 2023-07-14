import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { PageHeader } from './AppBar.styled';

export const AppBar = () => {
  return (
    <PageHeader>
      <Navigation />
      <AuthNav />
      <UserMenu />
    </PageHeader>
  );
};
