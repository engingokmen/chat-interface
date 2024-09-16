import { useAppData } from "../../context";
import { Message } from "./Message";

export const Messages = () => {
  const { messages } = useAppData();

  const messagesList = messages.map((message, index) => (
    <Message key={index} message={message} />
  ));

  return <ul>{messagesList}</ul>;
};
