import { HEROES_ROUTE } from "../utils/consts";
import { NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchOneHero, deleteHero } from "../http/heroesAPI";
import styles from "./HeroPage.module.css";
import ChangeHero from "../components/Hero/ChangeHero";

const LogoPage = () => {
  const [heroes, setHeroes] = useState({ SuperheroImages: [] });
  const [changeHero, setChangeHero] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    fetchOneHero(id).then((data) => {
      setHeroes(data);
    });
  }, [changeHero, id]);

  return (
    <div className={styles.HeroContent}>
      {changeHero === true ? (
        <>
          <button
            className={`${styles.changeButton}`}
            onClick={() => setChangeHero(false)}
          >
            Cancel hero
          </button>

          <ChangeHero heroes={heroes} id={id} />
        </>
      ) : (
        <>
          <h2 className={styles.heroName}>{heroes.nickname}</h2>
          <div className={styles.buttonContainer}>
            <button
              className={`${styles.changeButton} ${styles.button}`}
              onClick={() => setChangeHero(true)}
            >
              Change hero
            </button>
            <NavLink name="delete" style={{ color: "white" }} to={HEROES_ROUTE}>
              <button
                className={`${styles.deleteButton} ${styles.button}`}
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
                Delete hero
              </button>
            </NavLink>
          </div>

          <div className={styles.infoHero}>
            <h2>Real name: {heroes.real_name}</h2>
            <h2>Superpowers: {heroes.superpowers}</h2>
            <h2>Catch phrase: {heroes.catch_phrase}</h2>
            <h1>Origin description:</h1>
            <div className={styles.infoHero}>{heroes.origin_description}</div>
          </div>
          <h1>Images</h1>
          <div className={styles.uploadedImages}>
            {!heroes.SuperheroImages ? (
              <>Without Retings</>
            ) : (
              heroes.SuperheroImages.map((listRatings, index) => (
                <div
                  className={styles.imageGallery}
                  key={listRatings.id}
                  style={{
                    background: "LightGray",
                    padding: 10,
                  }}
                >
                  <img
                    className={styles.img}
                    src={process.env.REACT_APP_API_URL + listRatings.image}
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

export default LogoPage;
