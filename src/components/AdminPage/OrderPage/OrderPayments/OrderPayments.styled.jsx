import styled from '@emotion/styled';

export const PaymentsContainer = styled.div`
  padding-bottom: 12px;
`;

export const PartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const PartTitle = styled.h3``;

export const AddDiscountButton = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: var(--black-color);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  opacity: 0.7;
  transition: opacity var(--transition);

  &:hover {
    opacity: 1;
  }
`;

export const PaymentsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Payment = styled.li`
  display: flex;
  justify-content: space-between;
`;

export const Text = styled.p``;
