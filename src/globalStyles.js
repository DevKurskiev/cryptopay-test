import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const LightGlobalStyle = createGlobalStyle`
  *{
    transition: all .5s;
  }
  html,
  body,
  #root {
    height: 100%;
    margin: 0;
    padding: 0;
  }
`;

export const DarkGlobalStyle = createGlobalStyle`
*{
  transition: all .5s;
}

  html,
  body,
  #root {
    height: 100%;
    margin: 0;
    padding: 0;
    background: ${theme.darkPalette.default};
  }
`;
