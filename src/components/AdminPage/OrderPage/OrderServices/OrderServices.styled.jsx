import styled from '@emotion/styled';
import { FiTrash2 } from 'react-icons/fi';

export const ServicesContainer = styled.div`
  padding-bottom: 12px;
  margin-bottom: 20px;
  border-bottom: 2px solid var(--white-color);
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const PartTitle = styled.h3``;

export const AddServices = styled.div`
  position: relative;
  display: inline-block;
  margin-left: auto;
  opacity: 0.7;
  transition: opacity var(--transition);

  &:hover {
    opacity: 1;
  }
`;

export const AddServicesButton = styled.div`
  position: relative;
  display: inline-block;
  padding: 10px;
  background-color: #007bff;
  // background-color: ${props => props.color};
  color: var(--black-color);
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const ServicesSelect = styled.select`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

// Табличка з послугами

export const Table = styled.table`
  width: 100%;
  min-height: 90px;
  border-collapse: collapse;
  border-spacing: 0;
  background-color: #f4f4f4;
  color: black;
  border-radius: 8px;
  overflow: hidden;
`;

export const TableHead = styled.thead`
  background-color: #0073e6;
  color: #fff;
  text-align: left;
`;

export const TableRow = styled.tr`
  &:nth-of-type(even) {
    background-color: #e6e6e6;
  }
`;

export const TableHeader = styled.th`
  padding: 10px;
  width: max-content;
`;

export const TableNameHeader = styled.th`
  padding: 10px;
  width: 60%;
`;

export const TableData = styled.td`
  padding: 10px;
`;

export const AmountInput = styled.input`
  width: 50px;
`;

export const DeleteBtn = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  opacity: 0.5;
  transition: opacity var(--transition);

  &:hover {
    opacity: 1;
  }
`;

export const DeleteIcon = styled(FiTrash2)`
  width: 25px;
  height: 25px;
  color: red;
`;
