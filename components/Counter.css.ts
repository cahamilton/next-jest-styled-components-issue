import styled from "styled-components";

export const Button = styled.button`
  padding: 1em;
  color: white;
  background: ${(props) => props.theme.colors.primary};
  border: 0;
`;
