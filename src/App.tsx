import React from "react";
import { Messages } from "./features/messages";
import { Laout } from "./component/Laout";
import { InputForm } from "./features/inputForm";

function App() {
  return (
    <Laout>
      <Messages />
      <InputForm />
    </Laout>
  );
}

export default App;
