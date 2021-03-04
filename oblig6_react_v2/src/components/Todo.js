import React from "react";
import Button from "./Button";
import PropTypes from "prop-types";
import styled from "styled-components";

const Todobox = styled.section`
  display: grid;
  grid-template-rows: auto;

  box-shadow: 0px 8px 16px #5dd3d829;
  border-radius: 8px;
  width: 282px;
  height: 163px;
  padding: 27px 22px 28px 30px;
`;

const Title = styled.h2`
  font-size: 16px;
  margin: 0;
`;

const Content = styled.p`
  font-size: 14px;
  margin: 0;
`;

const Todo = ({ todo, completedTodos, setCompletedTodos }) => {
  const deleteTodo = () => {
    const allTodos = { ...completedTodos };
    delete allTodos[todo.id - 1];
    setCompletedTodos(allTodos);
  };

  return (
    <>
      <Todobox>
        <Title>{todo.title}</Title>
        <Content>{todo.content}</Content>
        <Button
          title="complete"
          type="button"
          classname="end small"
          actiontrigger={deleteTodo}
        />
      </Todobox>
    </>
  );
};

Todo.propTypes = {
  todo: PropTypes.object.isRequired,
  completedTodos: PropTypes.object.isRequired,
  setCompletedTodos: PropTypes.func.isRequired
};

export default Todo;
