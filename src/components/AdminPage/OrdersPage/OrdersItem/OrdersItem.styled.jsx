import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Item = styled.li`
  padding: 20px;
  background-color: var(--admin-items-bg-color);
  border-radius: 12px;
`;

export const OrderHeader = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  margin-bottom: 12px;
`;

export const MarkUrgency = styled.b`
  display: inline-block;
  padding: 5px;
  background-color: red;
  font-size: 16px;
  border-radius: 12px;
`;

export const OrderLink = styled(Link)`
  font-size: 16px;
  font-weight: 700;
  color: var(--white-color);
  &:hover {
    color: var(--accent-color);
  }
`;

export const StatusButton = styled.button`
  background-color: ${props => props.color};
  padding: 5px;
  margin-left: auto;
  min-width: 75px;
  border: none;
  border-radius: 8px;
`;

export const PartContainer = styled.div`
  display: flex;
  gap: 25px;

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 470px;
`;

export const Text = styled.p``;
