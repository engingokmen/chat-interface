import React from "react";
import ReactDOM from "react-dom/client";
import ChatApp from "./App";
import reportWebVitals from "./reportWebVitals";
import { Direction, IMessage } from "./types";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const messages = [
  { direction: Direction.Received, value: "Received1" },
  { direction: Direction.Sent, value: "Sent2" },
  { direction: Direction.Received, value: "Received2" },
  { direction: Direction.Sent, value: "Sent3" },
  { direction: Direction.Received, value: "Received3" },
];

const onSentMessage = (message: IMessage) => {
  console.log(message);
};

root.render(
  <React.StrictMode>
    <ChatApp {...{ messages, onSentMessage }} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
