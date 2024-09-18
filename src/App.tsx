import React from "react";
import { Messages } from "./features/messages";
import { Laout } from "./component/Laout";
import { InputForm } from "./features/inputForm";
import { ComboBox } from "./features/comboBox";
import { Autosuggestion } from "./features/autoSuggestion";
import { ImageDisplay } from "./features/imageDisplay";

function App() {
  return (
    <Laout>
      <Messages />
      <ComboBox />
      <Autosuggestion />
      <ImageDisplay />
      <InputForm />
    </Laout>
  );
}

export default App;
