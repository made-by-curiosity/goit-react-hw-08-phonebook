import { LoginForm } from 'components/LoginForm/LoginForm';
import { FormWrapper } from 'components/MainForm/MainForm.styled';

const LoginPage = () => {
  return (
    <FormWrapper>
      <LoginForm formTitle="Log In" />
    </FormWrapper>
  );
};

export default LoginPage;
