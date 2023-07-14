import { Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import Contacts from 'pages/Contacts';
import { Layout } from './Layout/Layout';
import LoginPage from 'pages/LoginPage';
import SignUpPage from 'pages/SignUpPage';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<SignUpPage />} />
        </Route>
      </Routes>
    </>
  );
};
