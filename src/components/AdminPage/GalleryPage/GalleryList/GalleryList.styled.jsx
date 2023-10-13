import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 8px;
  background-color: var(--secondary-bg-color);
  border-radius: 8px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const ImageThumb = styled.div`
  position: relative;
`;

export const Image = styled.img`
  width: 100%;
`;

export const UnderTitle = styled.p`
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 6px 0;
  text-align: center;
  width: 100%;
  background-color: var(--shadow-bg-color);
`;

export const DeleteButton = styled.button`
  min-height: 40px;
  background-color: red;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;
