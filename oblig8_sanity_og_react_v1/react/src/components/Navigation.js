import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Nav = styled.nav``;

const NavMenu = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  padding: 0 20px;

  &:first-child {
    padding-left: 0;
  }

  & > a {
    color: var(--black);
    display: block;
    font-size: 20px;
    text-decoration: none;

    &.active {
      color: var(--red);
      border-bottom: 4px solid var(--red);
    }
  }
`;

const Navigation = () => (
  <>
    <Nav>
      <NavMenu>
        <NavItem>
          <NavLink exact to="/" activeClassName="active">
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink exact to="/movies" activeClassName="active">
            Movies
          </NavLink>
        </NavItem>
      </NavMenu>
    </Nav>
  </>
);

export default Navigation;
