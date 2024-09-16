import { useAppData } from "../../context";

export const Messages = () => {
  const { messages } = useAppData();

  const messagesList = messages.map((message, index) => (
    <li key={index}>{message}</li>
  ));
  return <ul>{messagesList}</ul>;
};
