import React, { useState } from "react";
import styled from "styled-components";
import "./assets/scss/styles.scss";
import Navbar from "./components/Navbar";
import Todos from "./components/Todos";
import Form from "./components/Form";
import { preDefinedTodos } from "./assets/js/preDefinedTodos";

const Main = styled.main`
  width: 80%;
  max-width: 926px;
  margin: 0 auto;
`;

const App = () => {
  const [username, setUsername] = useState(""); // just in case we want to use this later..
  const [completedTodos, setCompletedTodos] = useState({ ...preDefinedTodos });

  return (
    <>
      <Navbar logo="hiof" username={username} />
      <Main>
        <Form
          completedTodos={completedTodos}
          setCompletedTodos={setCompletedTodos}
        />
        <Todos
          title="my todos"
          completedTodos={completedTodos}
          setCompletedTodos={setCompletedTodos}
        />
      </Main>
    </>
  );
};

export default App;
