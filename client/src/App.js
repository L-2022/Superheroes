import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/UI/NavBar";
import FooterBar from "./components/UI/Footer";
import { observer } from "mobx-react-lite";

const App = observer(() => {

  useEffect(() => {
  }, []);

  return (
    
    <BrowserRouter>
      <NavBar />     
      <AppRouter />
      <FooterBar />
    </BrowserRouter>
  );
});

export default App;
