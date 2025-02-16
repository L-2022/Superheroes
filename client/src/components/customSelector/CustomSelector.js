import React, { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import styles from "./CustomSelector.module.css";

function CustomSelector({ selectors, onChange, value }) {
    const [isOpen, setIsOpen] = useState(false);
    const currentSelector = selectors.find((item) => item.selector === value) || selectors[0];

    function handleChangeSelector(selector) {
        onChange(selector);
        setIsOpen(false);
    }

    return (
            <menu
                    className={`${styles.selector__menu} ${isOpen ? styles.selector__open : ""}`}
                    onMouseEnter={() => setIsOpen(true)}
                    onMouseLeave={() => setIsOpen(false)}
                    style={{ zIndex: isOpen ? 20 : 1 }} // Піднімаємо селектор, якщо він відкритий
            >
                <button className={`${styles.menu__btn} ${isOpen ? styles.menu__active_btn : ""}`}>
                    {currentSelector.title}
                    <IoIosArrowUp
                            size={16}
                            className={isOpen ? styles.menu__icon_up : styles.menu__icon_down}
                    />
                </button>
                <div className={styles.selector__drop}>
                    {selectors
                            .filter((item) => item.selector !== currentSelector.selector)
                            .map((item) => (
                                    <button key={item.selector} onClick={() => handleChangeSelector(item.selector)}>
                                        {item.title}
                                    </button>
                            ))}
                </div>
            </menu>
    );
}

export { CustomSelector };
