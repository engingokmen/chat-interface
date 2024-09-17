import React from "react";
import { Messages } from "./features/messages";
import { Laout } from "./component/Laout";

function App() {
  return (
    <Laout>
      <Messages />
    </Laout>
  );
}

export default App;
