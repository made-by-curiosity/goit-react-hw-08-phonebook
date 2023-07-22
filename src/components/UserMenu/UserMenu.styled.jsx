import styled from '@emotion/styled';

export const UserWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const LogOutBtn = styled.button`
  min-width: 64px;
  margin: 0px;
  padding: 6px 16px;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  font-weight: 500;
  font-size: 0.8125rem;
  line-height: 1.75;

  color: rgb(255, 255, 255);
  background-color: rgb(49, 91, 152);

  outline: 0px;
  user-select: none;

  border-radius: 4px;

  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  &:hover,
  &:focus {
    text-decoration: none;
    background-color: rgba(49, 91, 152, 0.6);
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  }
`;

export const UserName = styled.span`
  padding: 5px 5px;

  display: inline-flex;

  font-weight: 600;
  color: rgb(0, 128, 128);

  background-color: rgba(14, 22, 32, 0.4);

  border-radius: 5px;
`;
