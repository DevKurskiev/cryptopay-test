import React, { useContext } from "react";

import Button from "../../atoms/Button";
import lightMockup from "../../../assets/images/mockup-light.png";
import darkMockup from "../../../assets/images/mockup-dark.png";
import ThemeContext from "../../../context";

import lightBot1 from "../../../assets/images/light-bot-1.png";
import lightBot2 from "../../../assets/images/light-bot-2.png";
import lightBot3 from "../../../assets/images/light-bot-3.png";
import lightBot4 from "../../../assets/images/light-bot-4.png";
import lightBot5 from "../../../assets/images/light-bot-5.png";

import darkBot1 from "../../../assets/images/dark-bot-1.png";
import darkBot2 from "../../../assets/images/dark-bot-2.png";
import darkBot3 from "../../../assets/images/dark-bot-3.png";
import darkBot4 from "../../../assets/images/dark-bot-4.png";
import darkBot5 from "../../../assets/images/dark-bot-5.png";

import {
  MainContainer,
  MainItem,
  MainTitle,
  MainSubTitle,
  MainPopularBotContainer,
  MainPopularBotItem,
} from "./styles";

function Main() {
  const { theme } = useContext(ThemeContext);
  const lightPopulatBots = [
    lightBot1,
    lightBot2,
    lightBot3,
    lightBot4,
    lightBot5,
  ];
  const darkPopulatBots = [darkBot1, darkBot2, darkBot3, darkBot4, darkBot5];

  return (
    <MainContainer>
      <MainItem>
        <MainTitle dark={theme === "dark"}>
          Crypto payments for <span>telegram bots</span>
        </MainTitle>
        <MainSubTitle dark={theme === "dark"}>
          Seamlessly accept crypto payments
          <br />
          in your Telegram bots and services.
        </MainSubTitle>
        <Button primary dark={theme === "dark"} text="Get started" />

        <MainPopularBotContainer>
          {theme === "dark"
            ? darkPopulatBots.map((el) => <MainPopularBotItem src={el} />)
            : lightPopulatBots.map((el) => <MainPopularBotItem src={el} />)}
        </MainPopularBotContainer>

        <MainSubTitle style={{ margin: 0 }} dark={theme === "dark"}>
          Popular bots use Crypto Pay
        </MainSubTitle>
      </MainItem>
      <MainItem>
        <img alt="" src={theme === "dark" ? darkMockup : lightMockup} />
      </MainItem>
    </MainContainer>
  );
}

export default Main;
