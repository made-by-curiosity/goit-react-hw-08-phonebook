import { Link } from 'react-router-dom';
import { LoginWrapper, HeroWrapper, Decription, LinkItem } from './Hero.styled';
import { Container } from 'components/Container/Container';

export const Hero = () => {
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
        <p>
          <LinkItem to="/login">Login</LinkItem> to your account to get access
          to all your contacts
        </p>
        <p>
          Isn't member yet? <LinkItem to="/register">Sign up</LinkItem>
        </p>
      </LoginWrapper>
    </Container>
  );
};
