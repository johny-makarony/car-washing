import styled from '@emotion/styled';

export const FilterList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  list-style: none;
`;

export const FilterItem = styled.li``;

export const FilterButton = styled.button`
  background-color: ${props => props.color};
  padding: 5px;
  min-width: 75px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;
