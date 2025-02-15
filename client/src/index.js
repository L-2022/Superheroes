import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import HeroesStore from "./store/HeroesStore";
import "./styles/global.css";

export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
        <Context.Provider
                value={{
                    heroes: new HeroesStore(),
                }}
        >
            <App />
        </Context.Provider>
);
