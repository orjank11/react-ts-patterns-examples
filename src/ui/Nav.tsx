import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

interface Props {}
export const Navbar = styled.nav`
  display: flex;
  flex-direction: row;
  margin-bottom: 24px;
  width: 100%;
  background-color: tomato;
  color: white;
  justify-content: center;
`;

export const NavItem = styled(NavLink)<{active?: boolean}>`
  color: white;
  display: inline-block;
  padding: 8px 16px;
  text-decoration: none;
`
