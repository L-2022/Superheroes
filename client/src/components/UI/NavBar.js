import React from "react";
import { ADD_HERO_ROUTE, HEROES_ROUTE } from "../../utils/consts";
import { observer } from "mobx-react-lite";
import { useHistory, NavLink } from "react-router-dom";
import headerLogo from "../../assets/R.png";
import styles from "../../styles/NavBar.module.css";

const NavBar = observer(() => {
  const history = useHistory();
  return (
    <header className={styles.header}>
      <div className={styles.header__box}>
        <NavLink to={HEROES_ROUTE} className={styles.header__logo}>
          
          <img src={headerLogo} alt="logo" width="40px" height="40px" />
        </NavLink>
        <div className={styles.header__links}>
          <NavLink to={ADD_HERO_ROUTE} className={styles.header__link}
              onClick={() => history.push(ADD_HERO_ROUTE)}>
          Create Hero
          </NavLink>
        </div>
      </div>
    </header>
  );
});

export default NavBar;
