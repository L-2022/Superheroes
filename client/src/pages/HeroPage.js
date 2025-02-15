import { NavLink, useParams, useHistory } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { HEROES_ROUTE } from "../utils/consts";
import styles from "../styles/HeroPage.module.css";
import { fetchOneHero, deleteHero } from "../http/heroesAPI";
import UpdateHero from "../components/Hero/UpdateHero";

const HeroPage = () => {
  const [heroes, setHeroes] = useState({ SuperheroImages: [], listSuperpowers: [] });
  const [changeHero, setChangeHero] = useState(false);
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    fetchOneHero(id).then((data) => {
      setHeroes(data || { SuperheroImages: [], listSuperpowers: [] });
    });
  }, [changeHero, id]);

  const handleDelete = async () => {
    const confirmation = window.confirm("Are you sure you want to delete this character?");
    if (confirmation) {
      await deleteHero(id);
      history.push(HEROES_ROUTE);
    }
  };

  return (
          <div className={styles.hero_wrapper}>
            {changeHero ? (
                    <>
                      <div className={styles.container_btn}>
                        <button className={`${styles.btn} ${styles.change}`} onClick={() => setChangeHero(false)}>
                          Cancel
                        </button>
                      </div>
                      <UpdateHero heroes={heroes} id={id} />
                    </>
            ) : (
                    <>
                      <div className={styles.container_btn}>
                        <button className={`${styles.btn} ${styles.change}`} onClick={() => setChangeHero(true)}>
                          Change
                        </button>
                        <button className={`${styles.btn} ${styles.delete}`} onClick={handleDelete}>
                          Delete
                        </button>
                      </div>
                      <h2 className={styles.hero_name}>{heroes.nickname}</h2>
                      <div className={styles.wrapper__info_hero}>
                        {heroes.SuperheroImages.length > 0 ? (
                                <img className={styles.main_hero_img} src={process.env.REACT_APP_API_URL + heroes.SuperheroImages[0].image} alt="Hero" />
                        ) : (
                                <>Without Images</>
                        )}

                        <div className={styles.info_hero}>
                          <h2 className={`${styles.label} ${styles.short}`}>Real name: <p>{heroes.real_name}</p></h2>
                          <h2 className={`${styles.label} ${styles.short}`}>Catch phrase: <p>{heroes.catch_phrase}</p></h2>
                          <h2 className={`${styles.label} ${styles.long}`}>
                            Achievement: <p>{heroes.superpowers}</p>
                          </h2>

                        </div>
                      </div>
                      <div className={styles.info_hero}>
                      <h1 className={`${styles.label} ${styles.long}`}>
                        Origin description:<p>{heroes.origin_description}</p>
                      </h1>

                      <p>Superpowers:</p>
                      <div className={styles.list_superpowers}>
                        {heroes.listSuperpowers.length > 0 ? (
                                heroes.listSuperpowers.map((listSuperpower) => (
                                        <div className={styles.superpower_item} key={listSuperpower.id}>
                                          <p>{listSuperpower.titleSuperpower}</p>
                                        </div>
                                ))
                        ) : (
                                <>Without Superpowers</>
                        )}
                      </div>
                    </div>
                      <h1>Images:</h1>
                      <div className={styles.gallery}>
                        {heroes.SuperheroImages.length > 0 ? (
                                heroes.SuperheroImages.map((itemImg) => (
                                        <div key={itemImg.id}>
                                          <img className={styles.img} src={process.env.REACT_APP_API_URL + itemImg.image} alt="Hero" />
                                        </div>
                                ))
                        ) : (
                                <>Without Images</>
                        )}
                      </div>
                    </>
            )}
          </div>
  );
};

export default HeroPage;
