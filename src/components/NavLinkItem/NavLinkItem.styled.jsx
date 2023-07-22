import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavLinkItem = styled(NavLink)`
  padding: 10px 5px;

  display: inline-flex;

  font-size: 20px;
  font-weight: 600;
  color: inherit;

  border-radius: 5px;

  transition: background-color 300ms ease-out;

  &:hover,
  &:focus {
    background-color: rgb(14, 22, 32);
  }

  &.active {
    color: orange;
  }
`;
