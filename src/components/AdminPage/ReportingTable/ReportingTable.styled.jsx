import styled from '@emotion/styled';

export const TableContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  column-gap: 20px;
  margin-top: 20px;
`;

export const TableThumb = styled.div`
  flex-basis: calc(50% - 10px);
  margin-top: 20px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  overflow: hidden;
`;

export const Title = styled.h2`
  padding: 10px;
  text-align: center;
  width: 100%;
  color: black;
  background-color: #e6e6e6;
  font-size: 20px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  background-color: #f4f4f4;
  color: black;
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
