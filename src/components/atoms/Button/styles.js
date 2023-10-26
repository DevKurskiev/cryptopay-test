import styled, { css } from "styled-components";
import { theme } from "../../../theme/index";

import breakpoint from "../../../utils/media";

export const ButtonContainer = styled.button`
  padding: 18px 42px;
  color: ${theme.lightPalette.primary};
  background: ${theme.lightPalette.secondary};
  font-size: 20px;
  font-family: "Inter", sans-serif;
  border: 1px solid ${theme.lightPalette.secondary};
  border-radius: 900px;
  cursor: pointer;

  @media ${breakpoint.xs} {
    padding: 12px 32px;
    font-size: 18px;
  }

  ${(props) =>
    props.dark &&
    css`
      color: ${theme.darkPalette.secondary};
      background: ${theme.darkPalette.default};
      border: 1px solid ${theme.darkPalette.selected};
    `};

  ${(props) =>
    props.primary &&
    css`
      color: ${theme.lightPalette.default};
      background: ${theme.lightPalette.primary};
      border: none;
    `};
`;
