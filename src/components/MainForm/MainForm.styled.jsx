import styled from '@emotion/styled';

export const FormWrapper = styled.div`
  padding-top: 50px;
`;

export const FromTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

export const MainForm = styled.form`
  width: 500px;
  margin: 0 auto;
  padding: 30px 50px 50px;

  display: flex;
  flex-direction: column;

  gap: 10px;

  background-color: rgb(35, 48, 68);

  border-radius: 4px;
`;

export const MainInput = styled.input`
  width: 100%;
  padding: 10px 13px;

  font: inherit;
  letter-spacing: inherit;
  color: currentcolor;
  border: 1px solid gray;
  border-radius: 4px;

  background: none;

  margin: 0px;
  display: block;
  min-width: 0px;
`;

export const MainButton = styled.button`
  margin: 30px auto 0;
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
