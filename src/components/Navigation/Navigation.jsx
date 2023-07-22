import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { AppNav } from './Navigation.styled';
import { NavLinkItem } from 'components/NavLinkItem/NavLinkItem.styled';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <AppNav>
      <NavLinkItem to="/">Home</NavLinkItem>
      {isLoggedIn && <NavLinkItem to="/contacts">Contacts</NavLinkItem>}
    </AppNav>
  );
};
