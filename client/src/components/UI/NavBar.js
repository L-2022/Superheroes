import React from "react";
import { ADD_HERO_ROUTE, HEROES_ROUTE } from "../../utils/consts";
import { observer } from "mobx-react-lite";
import { useHistory, NavLink, useRouteMatch } from "react-router-dom";
import styles from "../../styles/NavBar.module.css";
import ThemeSwitcher from "../ThemeSwitcher";
import CustomSVG from "../Logo";

const NavBar = observer(() => {
  const history = useHistory();
  const createHeroMatch = useRouteMatch(ADD_HERO_ROUTE);

  return (
    <header className={styles.header}>
      <NavLink to={HEROES_ROUTE} className={styles.header__logo}>
          <CustomSVG color="var(--bg-logo)" />
      </NavLink>
      <div className={styles.header__links}>
          <ThemeSwitcher />
        <NavLink
          to={ADD_HERO_ROUTE}
          className={` ${createHeroMatch 
                  ? styles.header__link_active 
                  : styles.header__link}`}
          onClick={() => history.push(ADD_HERO_ROUTE)}
        >
          Create Hero
        </NavLink>
      </div>
    </header>
  );
});

export default NavBar;
