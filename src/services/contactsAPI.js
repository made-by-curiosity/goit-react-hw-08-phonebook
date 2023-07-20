import axios from 'axios';

const BASE_URL = 'https://connections-api.herokuapp.com';
const CONTACTS = '/contacts';
const USERS = '/users';
const SIGN_UP = `${USERS}/signup`;
const LOG_IN = `${USERS}/login`;
const LOG_OUT = `${USERS}/logout`;
const CURRENT_USER = `${USERS}/current`;

axios.defaults.baseURL = BASE_URL;

export const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = ``;
};

// user auth

export const signUpUser = async credentials => {
  const res = await axios.post(SIGN_UP, credentials);

  return res.data;
};

export const logInUser = async credentials => {
  const res = await axios.post(LOG_IN, credentials);

  return res.data;
};

export const logOutUser = async token => {
  const res = await axios.post(LOG_OUT, token);

  return res.data;
};

export const getUserInfo = async token => {
  const res = await axios.get(CURRENT_USER, token);

  return res.data;
};

// contacts

export const getAllContacts = async () => {
  const res = await axios.get(CONTACTS);

  return res.data;
};

export const addNewContact = async newContact => {
  const res = await axios.post(CONTACTS, newContact);

  return res.data;
};

export const deleteContactItem = async id => {
  const res = await axios.delete(`${CONTACTS}/${id}`);

  return res.data;
};

export const updateContactItem = async id => {
  const res = await axios.patch(`${CONTACTS}/${id}`);

  return res.data;
};
