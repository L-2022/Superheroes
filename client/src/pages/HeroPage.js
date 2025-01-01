import { NavLink, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { HEROES_ROUTE } from "../utils/consts";
import styles from "../styles/HeroPage.module.css";
import { fetchOneHero, deleteHero } from "../http/heroesAPI";
import UpdateHero from "../components/Hero/UpdateHero";

const HeroPage = () => {
  const [heroes, setHeroes] = useState({ SuperheroImages: [] });
  const [changeHero, setChangeHero] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    fetchOneHero(id).then((data) => {
      setHeroes(data);
    });
  }, [changeHero, id]);

  return (
    <div className={styles.hero_wrapper}>
      {changeHero === true ? (
        <>
          <button
            className={`${styles.change_btn}`}
            onClick={() => setChangeHero(false)}
          >
            Cancel
          </button>
          <UpdateHero heroes={heroes} id={id} />
        </>
      ) : (
        <>
          <h2 className={styles.hero_name}>{heroes.nickname}</h2>
          <div className={styles.container_btn}>
            <button
              className={`${styles.change_btn} ${styles.button}`}
              onClick={() => setChangeHero(true)}
            >
              Change
            </button>
            <NavLink name="delete" style={{ color: "white" }} to={HEROES_ROUTE}>
              <button
                className={`${styles.delete_btn} ${styles.button}`}
                name="delete"
                onClick={() => {
                  const confirmation = window.confirm(
                    "Are you sure you want to delete this character?"
                  );
                  if (confirmation) {
                    setChangeHero(false);
                    deleteHero(id);
                  }
                }}
              >
                Delete
              </button>
            </NavLink>
          </div>

          <div className={styles.info_hero}>
            <h2 className={styles.short_label}>
              Real name: {heroes.real_name}
            </h2>
            <h2 className={styles.short_label}>
              Catch phrase: {heroes.catch_phrase}
            </h2>
            <h2 className={styles.long_label}>
              Achievement: <p>{heroes.superpowers}</p>
            </h2>
            <h1 className={styles.long_label}>
              Origin description:<p>{heroes.origin_description}</p>
            </h1>
          </div>
          <div className={styles.list_superpowers}>
            <p>Superpowers:</p>
            {!heroes.listSuperpowers ? (
              <>Without Superpowers</>
            ) : (
              heroes.listSuperpowers.map((listSuperpower, index) => (
                <div
                  className={styles.list_superpowers__superpower}
                  key={listSuperpower.id}
                >
                  <p>{listSuperpower.titleSuperpower}</p>
                </div>
              ))
            )}
          </div>
          <h1>Images:</h1>
          <div className={styles.galery__item_img}>
            {!heroes.SuperheroImages ? (
              <>Without Retings</>
            ) : (
              heroes.SuperheroImages.map((itemImg, index) => (
                <div className={styles.gallery_img} key={itemImg.id}>
                  <img
                    className={styles.img}
                    src={process.env.REACT_APP_API_URL + itemImg.image}
                    alt=""
                  />
                  {heroes.image}
                </div>
              ))
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default HeroPage;
