import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Item = styled.li`
  padding: 20px;
  background-color: var(--admin-items-bg-color);
`;

export const OrderHeader = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const OrderLink = styled(Link)`
  font-size: 16px;
  font-weight: 700;
  color: var(--white-color);
  &:hover {
    color: var(--accent-color);
  }
`;

export const MarkUrgency = styled.b`
  background-color: red;
  font-size: 12px;
`;

export const StatusButton = styled.button`
  background-color: ${props => props.color};
  padding: 5px;
  margin-left: auto;
  min-width: 75px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;
