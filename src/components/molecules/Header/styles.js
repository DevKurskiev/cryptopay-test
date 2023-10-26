import styled, { css } from "styled-components";
import { theme } from "../../../theme/index";

import breakpoint from "../../../utils/media";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px 200px 0 200px;

  @media ${breakpoint.xs} {
    padding: 44px 20px 0 20px;
  }
`;

export const IconItem = styled.div`
  svg {
    border-radius: 16px;

    @media ${breakpoint.xs} {
      border-radius: 12px;
    }
  }
`;

export const NavParent = styled.ul`
  display: flex;
  list-style-type: none;
  gap: 32px;
  margin-right: -10%;

  @media ${breakpoint.xs} {
    display: none;
  }
`;
export const NavItem = styled.li`
  padding: 0;

  a {
    font-size: 20px;
    text-decoration: none;
    color: ${theme.lightPalette.selected};
    font-family: "Inter", sans-serif;
  }

  ${(props) =>
    props.dark &&
    css`
      a {
        color: ${theme.darkPalette.secondary};
      }
    `};
`;

export const StartedParent = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  svg {
    cursor: pointer;
  }
`;
