import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const SubmitButton = styled.button`
  text-transform: capitalize;
  border-radius: 6px;
  background-color: #56d4c2;
  border: none;
  color: #fff;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    background-color: #71e5d6;
  }
`;

const Button = ({ title, type, classname, actiontrigger }) => {
  return (
    <>
      <SubmitButton type={type} className={classname} onClick={actiontrigger}>
        {title}
      </SubmitButton>
    </>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  classname: PropTypes.string.isRequired,
  actiontrigger: PropTypes.func.isRequired
};

export default Button;
