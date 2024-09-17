import { useAppData } from "../../../context";

export const ButtonInputForm = () => {
  const { input } = useAppData();

  const isDisabled = input.trim() === "";

  return (
    <button type="submit" disabled={isDisabled}>
      Send
    </button>
  );
};
