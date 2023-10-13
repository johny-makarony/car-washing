import styled from '@emotion/styled';

export const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow-x: auto;
  max-width: 100%;
`;

export const TableThumb = styled.div`
  flex-basis: calc(50% - 10px);
  margin-top: 20px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  overflow: hidden;
`;

export const FlexContainer = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Title = styled.h2`
  margin-bottom: 20px;
  text-align: center;
  font-size: 20px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  background-color: #f4f4f4;
  color: black;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
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
`;

export const TableData = styled.td`
  padding: 10px;
`;

export const TableCellServices = styled.td`
  padding: 10px;
  display: flex;
  flex-direction: column;

  p {
    margin: 0;
    padding: 5px 0;
  }
`;
