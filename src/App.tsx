import React from "react";
import { Messages } from "./features/messages";
import { Laout } from "./component/Laout";
import { InputForm } from "./features/inputForm";
import { ComboBox } from "./features/comboBox";

function App() {
  return (
    <Laout>
      <Messages />
      <ComboBox />
      <InputForm />
    </Laout>
  );
}

export default App;
