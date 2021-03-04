import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  background-color: #ff2c70;
  border-radius: 20px;
  color: #fff;
  cursor: pointer;
  font-size: 20px;
  outline: none;
  border: none;
  padding: 20px;

  &:hover {
    color: #2e2e2e;
  }
`;

const Button = ({ alertMessage }) => {
  const click = () => {
    alert(alertMessage);
  };

  return (
    <>
      <Btn className="button" type="button" onClick={click}>
        Click Me!
      </Btn>
    </>
  );
};

export default Button;
