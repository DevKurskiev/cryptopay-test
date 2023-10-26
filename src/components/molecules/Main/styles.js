import styled, { css } from "styled-components";
import { theme } from "../../../theme/index";

import breakpoint from "../../../utils/media";

export const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px 200px 0 200px;

  @media ${breakpoint.xs} {
    padding: 44px 20px 0 20px;
    flex-direction: column;
  }
`;

export const MainItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  @media ${breakpoint.xs} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const MainTitle = styled.h1`
  margin: 0;
  font-family: Inter;
  font-size: 80px;
  font-weight: 629;
  text-align: left;
  color: ${theme.lightPalette.selected};

  span {
    color: ${theme.lightPalette.primary};
  }

  ${(props) =>
    props.dark &&
    css`
      color: ${theme.darkPalette.secondary};
    `};

  @media ${breakpoint.xs} {
    font-size: 46px;
    text-align: center;
  }
`;

export const MainSubTitle = styled.h3`
  margin: 32px 0;
  font-family: Inter;
  font-size: 20px;
  font-weight: 400;
  color: ${theme.lightPalette.selected};

  ${(props) =>
    props.dark &&
    css`
      color: ${theme.darkPalette.secondary};
    `};

  @media ${breakpoint.xs} {
    font-size: 18px;
  }
`;

export const MainPopularBotContainer = styled.div`
  margin-left: 30px;
`;

export const MainPopularBotItem = styled.img`
  width: 96px;
  height: 96px;
  margin: 56px 0 0 -30px;

  @media ${breakpoint.xs} {
    width: 63px;
    height: 63px;
    margin: 24px 0 0 -17px;
  }
`;
