import styled from '@emotion/styled';

export const Container = styled.div`
  padding-left: 50px;
  padding-right: 50px;
  // max-width: 1200px;

  // margin-left: auto;
  // margin-right: auto;
  // padding-left: 15px;
  // padding-right: 15px;

  // @media screen and (min-width: 480px) {
  //   max-width: 480px;
  // }

  // @media screen and (min-width: 768px) {
  //   max-width: 768px;
  // }

  // @media screen and (min-width: 1200px) {
  //   max-width: 1200px;
  // }
`;

export const AdminContainer = styled.div`
  padding: 0 40px;
  width: 100%;
  @media screen and (min-width: 768px) {
    padding: 0 80px;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 60px;
`;

export const Section = styled.section`
  padding-top: 40px;
  padding-bottom: 40px;

  @media screen and (min-width: 768px) {
    padding-top: 80px;
    padding-bottom: 80px;
  }
`;

export const SectionTitle = styled.h2`
text - align: center;
  // margin-bottom: 30px;

  font-weight: 700;
  font-size: 28px;
  line-height: 1.17;

  @media screen and (min-width: 1200px) {
    // margin-bottom: 50px;

    font-size: 36px;
  }
`;

export const MainButton = styled.button`
  margin: ${props => props.margin && `0 auto`};
  height: 50px;
  min-width: 200px;
  color: ${props => (props.color ? props.color : 'var(--white-color)')};
  background-color: transparent;

  border-radius: 25px;
  border: 1px solid var(--accent-color);
  cursor: pointer;
  transition: background-color var(--transition), color var(--transition);

  &:hover,
  &:focus {
    background-color: var(--accent-color);
    color: var(--white-color);
  }

  opacity: 0;
  animation: fadeIn 0.5s ease-in-out forwards;
  /* Інші стилі */

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
