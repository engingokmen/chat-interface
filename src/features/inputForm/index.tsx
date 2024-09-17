import {
  addMessage,
  resetInput,
  useAppData,
  useAppDipatch,
} from "../../context";
import { ButtonInputForm } from "./components/ButtonInputForm";
import { Input } from "./components/Input";

export const InputForm = () => {
  const { input } = useAppData();
  const dispatch = useAppDipatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addMessage(input));
    dispatch(resetInput());
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input />
      <ButtonInputForm />
    </form>
  );
};
