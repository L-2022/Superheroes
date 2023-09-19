import { useHistory } from "react-router-dom";
import { HERO_ROUTE } from "../../utils/consts";
import styles from "./HeroItem.module.css";
const HeroItem = ({ superhero }) => {
  const history = useHistory();
  const mainImage = superhero.SuperheroImages[0];
  return (
    <div className={styles.menu}>
      <div className={styles.menu__wrapper}>
        <div className={styles.menu_list}>
          {mainImage ? (
            <img
            className={styles.listImages}
              onClick={() => history.push(HERO_ROUTE + "/" + superhero.id)}
              src={process.env.REACT_APP_API_URL + mainImage.image}
              alt=""
            />
          ) : (
            <><img
            className={styles.listImages}
              onClick={() => history.push(HERO_ROUTE + "/" + superhero.id)}
              src={process.env.PUBLIC_URL + "/No photo.png"}
              alt=""
            /></>
          )}
          <p className={styles.nicknameHero}>{superhero.nickname}</p>
        </div>
      </div>
    </div>
  );
};

export default HeroItem;
