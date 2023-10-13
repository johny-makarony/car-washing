import styled from '@emotion/styled';
import { FiEdit } from 'react-icons/fi';

export const Form = styled.form`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 20px;
  padding-bottom: 12px;
  border-bottom: 2px solid var(--white-color);
`;

export const EditButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: scale var(--transition);
  &:hover {
    scale: 1.2;
  }
`;
export const EditIcon = styled(FiEdit)`
  width: 30px;
  height: 30px;
  color: yellow;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const TextArea = styled.textarea`
  padding: 5px;
  resize: none;
  border: none;
  border-radius: 8px;
  transition: background-color var(--transition), color var(--transition);
  :disabled {
    background-color: transparent;
    color: var(--white-color);
  }
`;

export const Input = styled.input`
  padding: 5px;
  border: none;
  border-radius: 8px;
  transition: background-color var(--transition), color var(--transition);
  :disabled {
    background-color: transparent;
    color: var(--white-color);
  }
`;

export const Select = styled.select`
  padding: 5px;
  border: none;
  border-radius: 8px;
  transition: background-color var(--transition), color var(--transition);
  :disabled {
    background-color: transparent;
    color: var(--white-color);
    opacity: 1;
  }
`;
