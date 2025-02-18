import { useHistory } from "react-router-dom";
import { HERO_ROUTE } from "../../utils/consts";
import styles from "../../styles/HeroItemt.module.css";

import NoPhoto from "../../assets/NoPhoto 2.png";
// import NoPhoto from "../../assets/NoImageHero.svg";

const HeroItem = ({ superhero }) => {
    const history = useHistory();
    const mainImage = superhero?.SuperheroImages?.length
            ? (!process.env.REACT_APP_DEMO_MODE
                    ? `${process.env.REACT_APP_API_URL}${superhero.SuperheroImages[0].image}`
                    : superhero.SuperheroImages[0].image)
            : NoPhoto;
    return (
            <div className={styles.wrapper_hero}>
                <div className={styles.hero}>
                    <img
                            className={styles.hero__img}
                            onClick={() => history.push(HERO_ROUTE + "/" + superhero.id)}
                            src={mainImage}
                            alt="Superhero"
                    />
                    <h2 className={styles.hero__nickname}>{superhero.nickname}</h2>
                </div>

            </div>
    );
};

export default HeroItem;
