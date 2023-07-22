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
  min-width: 0px;
  margin: 0px;
  padding: 10px 13px;

  display: block;

  font: inherit;
  letter-spacing: inherit;
  color: currentcolor;
  border: 1px solid;
  border-radius: 4px;

  border-color: ${({ errors }) => (errors ? 'red' : 'gray')};

  background: none;
  outline: none;
`;

export const MainButton = styled.button`
  margin-top: 16px;
  padding: 10px 20px;

  display: inline-block;
  min-width: 100px;

  color: currentColor;
  border-radius: 4px;
  transition: background-color 300ms ease-out, color 100ms ease-out;

  background-color: rgb(64, 122, 214);

  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;

  &:hover,
  &:focus {
    background-color: rgb(44, 85, 149);
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  }

  &:active {
    background-color: rgba(44, 85, 149, 0.5);
  }

  &:disabled {
    background-color: rgba(44, 85, 149, 0.3);

    color: #d5d5d5;

    &:hover {
      cursor: not-allowed;
    }
  }
`;

export const ErrorMessage = styled.p`
  color: rgba(255, 0, 0, 0.9);
`;
