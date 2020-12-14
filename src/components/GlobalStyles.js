import { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle(
  ({ theme: { colors }}) => css`
    *{
      margin: 0;
      padding: 0;
      border: 0;
      box-sizing: border-box;
    }
    body{
      font-family: 'Josefin Sans', sans-serif;
      background-color: ${colors.background};
    }
    a{
      text-decoration: none;
      color: inherit;
    }
    ul{
      list-style-type: none;
    }
`)