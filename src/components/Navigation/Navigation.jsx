import { useSelector } from 'react-redux';
import { AppNav } from './Navigation.styled';
import { NavLinkItem } from 'components/NavLinkItem/NavLinkItem.styled';
import { selectIsLoggedIn } from 'redux/auth/selectors';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <AppNav>
      <NavLinkItem to="/">Home</NavLinkItem>
      {isLoggedIn && <NavLinkItem to="/contacts">Contacts</NavLinkItem>}
    </AppNav>
  );
};
