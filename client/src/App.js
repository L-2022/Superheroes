import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/UI/NavBar";
import Footer from "./components/UI/Footer";
import { observer } from "mobx-react-lite";
import { ToastContainer } from "react-toastify";

const App = observer(() => {
    return (
            <BrowserRouter >
                <div className="layout">
                    <NavBar />
                    <main >
                        <AppRouter />
                    </main>

                </div><Footer />
                <ToastContainer position="top-right" autoClose={3000} />
            </BrowserRouter>
    );
});

export default App;
