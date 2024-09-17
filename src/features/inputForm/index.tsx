import {
  addMessage,
  changeInput,
  resetInput,
  useAppData,
  useAppDipatch,
} from "../../context";
import { ButtonInputForm } from "./components/ButtonInputForm";

export const InputForm = () => {
  const { input } = useAppData();
  const dispatch = useAppDipatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeInput(e.target.value));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addMessage(input));
    dispatch(resetInput());
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Type a message..."
      />
      <ButtonInputForm />
    </form>
  );
};
