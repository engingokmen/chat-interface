import {
  addMessage,
  changeInput,
  useAppData,
  useAppDipatch,
} from "../../context";

export const InputForm = () => {
  const { input } = useAppData();
  const dispatch = useAppDipatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeInput(e.target.value));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("input", input);
    dispatch(addMessage(input));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Type a message..."
      />
      <button type="submit">Send</button>
    </form>
  );
};
