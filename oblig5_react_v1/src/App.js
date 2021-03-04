import React, { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import Food from "./components/Food";
import MyComponent from "./components/MyComponent";
import Wrapper from "./components/Wrapper";

import { food } from "./assets/js/food";

import "./assets/scss/styles.scss";

const App = () => {
  const [alertMessage, setAlertMessage] = useState("");
  const handleAlertMessage = (message) => {
    setAlertMessage(message.messagevalue);
  };

  return (
    <>
      <Wrapper displayType="flex">
        <MyComponent title="🔥 It works! 🔥" />
        <Food food={food} title="The food" />
        <Alert
          handleAlertMessage={handleAlertMessage}
          alertMessage={alertMessage}
        />
        <Button alertMessage={alertMessage} />
      </Wrapper>
    </>
  );
};

export default App;
