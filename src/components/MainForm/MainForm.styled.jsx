import styled from '@emotion/styled';

export const MainForm = styled.form`
  width: 500px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  gap: 10px;
`;

export const MainInput = styled.input`
  width: 100%;
  padding: 5px 10px;
`;

export const MainButton = styled.button`
  margin: 0 auto;
  padding: 5px;

  display: inline-block;
  width: 150px;

  border: 1px solid gray;
  border-radius: 5px;
  transition: background-color 300ms ease-out, color 100ms ease-out;

  &:hover,
  &:focus {
    background-color: #aaa;
    color: #fff;
  }

  &:active {
    background-color: gray;
  }

  &:disabled {
    background-color: #fff;
    color: #d5d5d5;

    &:hover {
      cursor: not-allowed;
    }
  }
`;
