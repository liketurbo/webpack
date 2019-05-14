import React from 'react';
import { Link, Route, RouteProps } from 'react-router-dom';
import styled from 'styled-components';

const NavLink = styled.div`
  a {
    transition: color 0.2s, border-bottom-color 0.2s;
    color: ${({ active }: { active: any }) => (active ? '#0000ff' : '#666')};
    text-decoration: none;
    border-bottom: 2px solid;
    border-bottom-color: ${({ active }: { active: any }) =>
      active ? 'rgba(0, 0, 255, 0.1)' : 'transparent'};
    &:hover,
    &:active,
    &:focus {
      color: ${({ active }: { active: any }) => (active ? '#0000ff' : '#222')};
    }
  }
`;

export default ({ path, exact, ...props }: RouteProps) => (
  <Route
    path={path}
    exact={exact}
    children={({ match }) => (
      <NavLink active={match as any}>
        <Link to={path as any}>{(props as any).title}</Link>
      </NavLink>
    )}
  />
);
