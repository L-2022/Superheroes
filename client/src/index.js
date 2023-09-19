import "./index.css";
import React, { createContext } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import DeviceStore from "./store/HeroesStore";

export const Context = createContext(null);

ReactDOM.render(
  <Context.Provider
    value={{
      heroes: new DeviceStore(),
    }}
  >
    <App />
  </Context.Provider>,
  document.getElementById("root")
);
