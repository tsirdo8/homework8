import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    background-color: ${({ theme }) => theme.body};
    transition: all 0.25s linear;
  }
`;
