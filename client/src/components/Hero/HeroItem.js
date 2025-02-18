import { useHistory } from "react-router-dom";
import { HERO_ROUTE } from "../../utils/consts";
import styles from "../../styles/HeroItemt.module.css";

import NoPhoto from "../../assets/NoPhoto.png";

const HeroItem = ({ superhero }) => {
    const history = useHistory();
    console.log(process.env.DEMO_MODE, process.env.REACT_APP_API_URL, process.env.REACT_APP_API_URL_LOCAL)
    // const mainImage = process.env.REACT_APP_API_URL + superhero.SuperheroImages[0]?.image  || NoPhoto;
    const mainImage = process.env.REACT_APP_API_URL_LOCAL
            ? superhero.SuperheroImages[0]?.image || NoPhoto
            : process.env.REACT_APP_API_URL + superhero.SuperheroImages[0]?.image;
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
