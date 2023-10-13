import styled from '@emotion/styled';
import { Select, TextField } from '@mui/material';
import { AiOutlineClose } from 'react-icons/ai';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(25, 28, 38, 0.8);
`;

export const Modal = styled.div`
  position: relative;
  // display: flex;
  // flex-direction: column;
  // justify-content: center;
  padding: 50px;
  width: 800px;
  background-color: white;
`;

export const Title = styled.h3`
  margin-bottom: 20px;
  text-align: center;
  color: black;
  font-size: 24px;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 12px;
  color: black;
`;

export const Label = styled.label`
  width: 100%;
`;

export const Input = styled(TextField)`
  width: 100%;
`;

export const FormSelect = styled(Select)`
  width: 100%;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;

  background-color: transparent;
  border: none;

  cursor: pointer;
`;

export const CloseIcon = styled(AiOutlineClose)`
  width: 30px;
  height: 30px;
`;
