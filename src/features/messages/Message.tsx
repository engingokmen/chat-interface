import styled from "styled-components";

export const Message = ({ message }: { message: string }) => {
  return <Li>{message}</Li>;
};

const Li = styled.li`
  list-style-type: none;
  background-color: var(--pale-yellow);
  color: var(--blue);
  padding: 1rem;
  border-radius: 0.5rem;
  display: inline-block;
`;
