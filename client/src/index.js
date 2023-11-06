
import React, { createContext } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import HeroesStore from "./store/HeroesStore";
import "./styles/index.css"

export const Context = createContext(null);

ReactDOM.render(
  <Context.Provider
    value={{
      heroes: new HeroesStore(),
    }}
  >    <App />
  </Context.Provider>,
  document.getElementById("root")
);
