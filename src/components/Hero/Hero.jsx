import { useSelector } from 'react-redux';
import { LoginWrapper, HeroWrapper, Decription, LinkItem } from './Hero.styled';
import { Container } from 'components/Container/Container';
import { selectIsLoggedIn } from 'redux/auth/selectors';

export const Hero = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Container>
      <HeroWrapper>
        <h1>Your personal Phonebook</h1>
        <Decription>
          No need to keep in your memory all phone numbers. Keep your brain busy
          with dreaming and thinking about new horizons instead!
        </Decription>
      </HeroWrapper>
      <LoginWrapper>
        {isLoggedIn ? (
          <div>
            Wanna call someone?{' '}
            <LinkItem to="/contacts">Find number here</LinkItem>
          </div>
        ) : (
          <>
            <p>
              <LinkItem to="/login">Login</LinkItem> to your account to get
              access to all your contacts
            </p>
            <p>
              Isn't member yet? <LinkItem to="/register">Sign up</LinkItem>
            </p>
          </>
        )}
      </LoginWrapper>
    </Container>
  );
};
