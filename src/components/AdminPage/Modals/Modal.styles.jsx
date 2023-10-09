import styled from '@emotion/styled';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(25, 28, 38, 0.8);
`;

export const Modal = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  padding: 50px;
  background-color: white;
`;

export const Title = styled.h3`
  font-size: 24px;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 12px;
  color: black;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
`;
