import { useSelector } from 'react-redux';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { HeaderWrapper, PageHeader } from './AppBar.styled';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { Container } from 'components/Container/Container';

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <PageHeader>
      <Container>
        <HeaderWrapper>
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </HeaderWrapper>
      </Container>
    </PageHeader>
  );
};
