import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Logo from "./Logo";
import User from "./User";

const Nav = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  align-items: center;
  height: 60px;
  padding: 0 30px;
  box-shadow: 0px 6px 10px #00000019;
`;

const Navbar = ({ logo, username }) => {
  return (
    <>
      <Nav>
        <Logo logo={logo} />
        <User username={username} />
      </Nav>
    </>
  );
};

Navbar.propTypes = {
  logo: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired
};

export default Navbar;
