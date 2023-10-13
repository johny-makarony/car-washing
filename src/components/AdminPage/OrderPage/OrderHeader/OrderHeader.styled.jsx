import styled from '@emotion/styled';

export const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 12px;
  border-bottom: 2px solid var(--white-color);
`;

export const Title = styled.h2``;

export const MarkUrgency = styled.b`
  display: inline-block;
  margin-left: 20px;
  margin-right: 20px;
  padding: 5px;
  background-color: red;
  font-size: 16px;
  border-radius: 12px;
`;

export const Status = styled.div`
  position: relative;
  display: inline-block;
  margin-left: auto;
  transition: scale var(--transition);
  &:hover {
    scale: 1.1;
  }
`;

export const StatusButton = styled.div`
  display: inline-block;
  padding: 10px;
  //   background-color: #007bff;
  background-color: ${props => props.color};
  color: var(--black-color);
  cursor: pointer;
  border: none;
  border-radius: 5px;
  position: relative;

  &:hover {
    background-color: #0056b3;
  }
`;

export const StatusSelect = styled.select`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;
