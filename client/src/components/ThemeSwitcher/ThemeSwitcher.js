import React, { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import styles from "./themeSwitcher.module.css";

const ThemeSwitcher = () => {
    const [theme, setTheme] = useState(null);

    useEffect(() => {
        const savedTheme = typeof window !== "undefined" ? localStorage.getItem("theme") : null;
        if (savedTheme) {
            setTheme(savedTheme);
        } else {
            const currentHour = new Date().getHours();
            const initialTheme = currentHour >= 6 && currentHour < 18 ? "light" : "dark";
            setTheme(initialTheme);
        }
    }, []);

    useEffect(() => {
        if (theme) {
            document.documentElement.setAttribute("data-theme", theme);
            localStorage.setItem("theme", theme);
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    if (!theme) return null;

    return (
            <button onClick={toggleTheme} className={styles.switcher_button}>
                {theme === "light" ? (
                        <FaMoon size={20} className={`${styles.icon} ${styles.darkIcon}`} />
                ) : (
                        <FaSun size={20} className={`${styles.icon} ${styles.lightIcon}`} />
                )}
            </button>
    );
};

export default ThemeSwitcher;
