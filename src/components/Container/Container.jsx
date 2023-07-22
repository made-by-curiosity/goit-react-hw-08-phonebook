import React from 'react';
import PropTypes from 'prop-types';
import { PageTitle, PhonebookWrap } from './Container.styled';

export const Container = ({ titleText, children }) => {
  return (
    <PhonebookWrap>
      {titleText && <PageTitle>{titleText}</PageTitle>}
      {children}
    </PhonebookWrap>
  );
};

Container.propTypes = {
  titleText: PropTypes.string,
  children: PropTypes.node,
};
