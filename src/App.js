import React, { useState } from "react";

import Header from "./components/molecules/Header";
import Main from "./components/molecules/Main";
import ThemeContext from "./context";
import { GlobalStyle } from "./globalStyles";

const { Provider } = ThemeContext;

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <Provider value={{ theme, setTheme }} className="App">
      <GlobalStyle dark={theme === "dark"} />
      <Header />
      <Main />
    </Provider>
  );
}

export default App;
