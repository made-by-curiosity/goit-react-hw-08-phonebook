import styled from '@emotion/styled';
import { MainInput } from 'components/MainForm/MainForm.styled';

export const ContactsFilter = styled.div`
  & > p {
    margin-bottom: 5px;
  }
`;

export const FilterInput = styled(MainInput)`
  min-width: 250px;
  margin-bottom: 15px;
`;
