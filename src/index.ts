import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  /* @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;1,700&display=swap'); */
  
  * {
    border: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
    list-style: none;
    margin: 0;
    outline: 0;
    padding: 0;
    text-decoration: none;
  }
  
  body {
    align-items: center;
    background: linear-gradient(120deg, #ffe53bd8, #ff2525da);
    display: flex;
    height: 100vh;
    justify-content: center;
  }
`;
