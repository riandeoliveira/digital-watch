import { createGlobalStyle } from "styled-components";
import colors from "./themes/colors";
import fonts from "./themes/fonts";

export const GlobalStyle = createGlobalStyle`  
  * {
    border: 0;
    box-sizing: border-box;
    font-family: ${fonts.primary}, ${fonts.default};
    list-style: none;
    margin: 0;
    outline: 0;
    padding: 0;
    text-decoration: none;
  }
  
  body {
    align-items: center;
    background: linear-gradient(120deg, ${colors.secondary}, ${colors.tertiary});
    display: flex;
    justify-content: center;
    min-height: 100vh;
  }
`;
