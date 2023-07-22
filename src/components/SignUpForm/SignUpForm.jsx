import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  ErrorMessage,
  FromTitle,
  MainButton,
  MainForm,
  MainInput,
} from 'components/MainForm/MainForm.styled';
import { signUp } from 'redux/auth/operations';

const schema = yup
  .object({
    name: yup.string().required('This field is required!'),
    email: yup
      .string()
      .email('Email should have valid form "example@mail.com"')
      .required('This field is required!'),
    password: yup.string().required('This field is required!'),
  })
  .required();

export const SignUpForm = ({ formTitle }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const dispatch = useDispatch();

  const onSubmit = ({ name, email, password }) => {
    dispatch(
      signUp({
        name,
        email,
        password,
      })
    );
    reset();
  };

  return (
    <MainForm onSubmit={handleSubmit(onSubmit)}>
      {formTitle && <FromTitle>{formTitle}</FromTitle>}
      <label>
        <span>Name</span>
        <MainInput
          {...register('name')}
          autoComplete="off"
          autoFocus
          errors={errors.name}
        />
      </label>
      {errors.name?.message && (
        <ErrorMessage>{errors.name?.message}</ErrorMessage>
      )}
      <label>
        <span>Email</span>
        <MainInput
          {...register('email')}
          autoComplete="off"
          errors={errors.email}
        />
      </label>
      {errors.email?.message && (
        <ErrorMessage>{errors.email?.message}</ErrorMessage>
      )}

      <label>
        <span>Password</span>
        <MainInput
          {...register('password')}
          type="password"
          autoComplete="off"
          errors={errors.password}
        />
      </label>
      {errors.password?.message && (
        <ErrorMessage>{errors.password?.message}</ErrorMessage>
      )}

      <MainButton type="submit">Sign Up</MainButton>
    </MainForm>
  );
};

SignUpForm.propTypes = { formTitle: PropTypes.string.isRequired };
