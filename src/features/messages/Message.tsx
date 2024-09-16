import styled from "styled-components";
import { Direction } from "../../types";

export const Message = ({
  value,
  direction,
}: {
  value: string;
  direction: Direction;
}) => {
  return (
    <Li $direction={direction}>
      <Div $direction={direction}>{value}</Div>
    </Li>
  );
};

const Li = styled.li<{ $direction: Direction }>(
  ({ $direction }) => `
  list-style-type: none;
  display: flex;
  justify-content: flex-${$direction === Direction.Received ? "start" : "end"};
`
);

const Div = styled.div<{ $direction: Direction }>(
  ({ $direction }) => `
  background-color: var(
    ${$direction === Direction.Received ? "--pale-purple" : "--pale-yellow"}
  );
  color: var(--blue);
  padding: 0.4rem 0.6rem;
  border-radius: 0.5rem;
`
);
