import React, { useContext } from "react";

import Icon from "../../atoms/Icon/index";
import Button from "../../atoms/Button";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import ThemeContext from "../../../context";

import {
  HeaderContainer,
  IconItem,
  NavParent,
  NavItem,
  StartedParent,
} from "./styles";

const navItems = [
  { name: "Use cases", link: "#" },
  { name: "Features", link: "#" },
  { name: "How to start", link: "#" },
];

function Header() {
  const { isMobile } = useWindowDimensions();
  const { theme, setTheme } = useContext(ThemeContext);

  const handleChangeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <HeaderContainer>
      <IconItem>
        <Icon name={isMobile ? "logo-mob" : "logo"} size={isMobile ? 42 : 64} />
      </IconItem>

      <NavParent>
        {navItems.map((el) => {
          return (
            <NavItem dark={theme === "dark"} key={el.name}>
              <a href={el.link}>{el.name}</a>
            </NavItem>
          );
        })}
      </NavParent>

      <StartedParent>
        <Icon
          onClick={handleChangeTheme}
          name={theme === "light" ? "theme-light" : "theme-dark"}
          size={32}
        />
        <Button dark={theme === "dark"} text="Get started" />
      </StartedParent>
    </HeaderContainer>
  );
}

export default Header;
