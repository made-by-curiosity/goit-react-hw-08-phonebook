import { NavLinkItem } from 'components/NavLinkItem/NavLinkItem.styled';
import { AuthNavList } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <AuthNavList>
      <NavLinkItem to="/login">Login</NavLinkItem>
      <NavLinkItem to="/register">Sign Up</NavLinkItem>
    </AuthNavList>
  );
};
