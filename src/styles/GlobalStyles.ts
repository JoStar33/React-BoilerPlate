import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  
  a {
    text-decoration: none;
  }

  input:focus, textarea:focus {
    outline: none;
  }
`;