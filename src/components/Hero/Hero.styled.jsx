import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const HeroWrapper = styled.div`
  padding-top: 50px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 10px;
`;

export const LoginWrapper = styled.div`
  padding: 100px 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  flex-grow: 1;

  gap: 10px;
`;

export const Decription = styled.p`
  max-width: 800px;
  text-align: center;
`;

export const LinkItem = styled(Link)`
  color: rgb(123, 104, 238);
  text-decoration: underline;

  transition: color 300ms ease-out;

  &:hover,
  &:focus {
    color: rgb(72, 61, 139);
  }
`;
