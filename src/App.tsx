import React from "react";
import { Messages } from "./features/messages";
import { Laout } from "./component/Laout";
import { InputForm } from "./features/inputForm";
import { ComboBox } from "./features/comboBox";
import { Autosuggestion } from "./features/autoSuggestion";

function App() {
  return (
    <Laout>
      <Messages />
      <ComboBox />
      <Autosuggestion />
      <InputForm />
    </Laout>
  );
}

export default App;
