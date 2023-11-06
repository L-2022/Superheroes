import { useHistory } from "react-router-dom";
import { HERO_ROUTE } from "../../utils/consts";
import styles from "../../styles/HeroItemt.module.css";

import NoPhoto from "../../assets/NoPhoto.png";

const HeroItem = ({ superhero }) => {
  const history = useHistory();
  const mainImage = superhero.SuperheroImages[0];
  return (
    <div className={styles.wrapper_hero}>
      <div className={styles.hero}>
  {mainImage ? (
    <img
      className={styles.hero__img}
      onClick={() => history.push(HERO_ROUTE + "/" + superhero.id)}
      src={process.env.REACT_APP_API_URL + mainImage.image}
      alt="Superhero"
    />
  ) : (
    <img
      className={styles.hero__img}
      onClick={() => history.push(HERO_ROUTE + "/" + superhero.id)}
      src={NoPhoto}
      alt="NoPhoto"
    />
  )}
  <p className={styles.hero__nicname}>{superhero.nickname}</p>

  
</div>

    </div>
  );
};

export default HeroItem;
