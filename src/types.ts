export interface IState {
  messages: IMessage[];
  input: string;
  comboboxItems: Array<string>;
  combobox: Combobox;
}

export interface IMessage {
  direction: Direction;
  value: string;
}

export interface IAction {
  type: string;
  payload: string;
}

export enum Combobox {
  Select,
  Autocomplete,
  Image,
  null,
}

export enum Direction {
  Received,
  Sent,
}
