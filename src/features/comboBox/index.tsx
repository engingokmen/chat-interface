import { KeyboardEvent, useEffect, useRef } from "react";
import {
  changeInput,
  setCombobox,
  useAppData,
  useAppDipatch,
} from "../../context";
import { Combobox } from "../../types";
import styled from "styled-components";

export const ComboBox = () => {
  const { input, selectOptions } = useAppData();
  const dispatch = useAppDipatch();
  const ref = useRef<HTMLSelectElement>(null);

  const show = input.length > 0 && input === "/select";

  useEffect(() => {
    if (show && ref.current) {
      dispatch(setCombobox(Combobox.Select));
      ref.current.focus();
    } else {
      dispatch(setCombobox(Combobox.null));
    }
  }, [input]);

  const handleSubmit = (value: string) => {
    dispatch(setCombobox(Combobox.null));
    dispatch(changeInput(value));
  };

  const options = selectOptions.map((option) => (
    <option key={option}>{option}</option>
  ));

  const handleKeyDown = (e: KeyboardEvent<HTMLSelectElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit((e.target as HTMLSelectElement).value);
    }
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    handleSubmit(e.target.value);
  };

  return (
    <Select
      ref={ref}
      $show={show}
      onChange={handleOnChange}
      onKeyDown={handleKeyDown}
    >
      {options}
    </Select>
  );
};

const Select = styled.select<{ $show: boolean }>(
  ({ $show }) => `
    display: ${$show ? "block" : "none"};
`
);
