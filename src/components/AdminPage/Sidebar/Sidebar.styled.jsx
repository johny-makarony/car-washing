import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const PageLink = styled(NavLink)`
  color: #ffffff;
  &.active {
    color: var(--accent-color);
    background-color: var(--admin-items-bg-color);
  }
`;
