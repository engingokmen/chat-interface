import { changeInput, useAppData, useAppDipatch } from "../../../context";

export const Input = () => {
  const { input } = useAppData();
  const dispatch = useAppDipatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeInput(e.target.value));
  };

  return (
    <input
      id="input-chat"
      type="text"
      list="autosuggestions"
      value={input}
      onChange={handleChange}
      placeholder="Type a message..."
      autoComplete="off"
    />
  );
};
