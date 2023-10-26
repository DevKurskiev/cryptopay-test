import React, { useState } from "react";

import Header from "./components/molecules/Header";
import Main from "./components/molecules/Main";
import ThemeContext from "./context";
import { LightGlobalStyle, DarkGlobalStyle } from "./globalStyles";

const { Provider } = ThemeContext;

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <Provider value={{ theme, setTheme }} className="App">
      {theme === "light" ? <LightGlobalStyle /> : <DarkGlobalStyle />}
      <Header />
      <Main />
    </Provider>
  );
}

export default App;
