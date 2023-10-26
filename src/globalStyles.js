import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const GlobalStyle = createGlobalStyle`
  *{
    transition: all .5s;
  }
  html,
  body,
  #root {
    height: 100%;
    margin: 0;
    padding: 0;
    background:${(props) =>
      props.dark ? theme.darkPalette.default : theme.lightPalette.default};

  }
`;
