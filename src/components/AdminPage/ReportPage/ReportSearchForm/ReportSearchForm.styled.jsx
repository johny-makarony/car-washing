import styled from '@emotion/styled';
import { TextField } from '@mui/material';

export const SearchForm = styled.form`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  gap: 30px;
  padding: 25px;
  margin-bottom: 40px;
  color: var(--black-color);
  background-color: var(--white-color);
  border-radius: 12px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const DateLabel = styled.label``;

export const Input = styled(TextField)`
  width: 100%;
`;

export const Button = styled.button`
  @media screen and (max-width: 768px) {
    margin: 0 auto;
  }

  height: 50px;
  width: 200px;

  color: var(--black-color);
  background-color: transparent;

  border-radius: 25px;
  border: 1px solid var(--accent-color);
  cursor: pointer;
  transition: background-color var(--transition), color var(--transition);

  &:hover,
  &:focus {
    background-color: var(--accent-color);
    color: var(--white-color);
  }
`;
