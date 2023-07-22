import styled from '@emotion/styled';

export const ContactItem = styled.li`
  min-width: 250px;
  padding: 10px 20px;

  display: flex;
  align-items: center;
  justify-content: space-around;

  font-family: Roboto, Helvetica, Arial, sans-serif;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.5;
  letter-spacing: 0.01071em;
  color: rgba(255, 255, 255, 0.8);

  border-radius: 4px;

  background-color: rgb(18, 18, 18);

  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px,
    rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;
  background-image: linear-gradient(
    rgba(255, 255, 255, 0.04),
    rgba(255, 255, 255, 0.04)
  );

  transform: scale(1);

  transition: transform 200ms ease-out;

  &:not(:last-child) {
    margin-bottom: 5px;
  }

  &:hover,
  &:focus {
    transform: scale(1.05);
  }
`;

export const ContactWrapper = styled.div`
  flex-grow: 1;
  margin: 0 auto;
`;

export const DeleteBtn = styled.button`
  width: 40px;
  height: 40px;

  padding: 2px;
  margin-left: auto;

  display: inline-flex;
  justify-content: center;
  align-items: center;

  font-size: 12px;

  background-color: transparent;

  border-radius: 50%;
  transition: background-color 300ms ease-out;

  &:hover,
  &:focus {
    background-color: rgba(0, 0, 0, 0.3);
  }

  & svg {
    width: 20px;
    height: 20px;

    fill: rgb(178, 34, 34);
  }
`;
