import { useParams, useHistory } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { HEROES_ROUTE } from "../utils/consts";
import styles from "../styles/HeroPage.module.css";
import { fetchOneHero, deleteHero } from "../http/heroesAPI";
import UpdateHero from "../components/Hero/UpdateHero";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2"
import NoPhoto from "../assets/NoPhoto 2.png";

const HeroPage = () => {
  const [heroes, setHeroes] = useState({ SuperheroImages: [], listSuperpowers: []});
  const [changeHero, setChangeHero] = useState(false);
  const { id } = useParams();
  const history = useHistory();

  console.warn(process.env.REACT_APP_API_URL,
          process.env.REACT_APP_API_URL_DEFAULT_DATA,
          process.env.REACT_APP_DEMO_MODE)

  useEffect(() => {
    fetchOneHero(id).then((data) => {
      setHeroes(data || { SuperheroImages: [], listSuperpowers: [] });
    });
  }, [changeHero, id]);

  const handleDelete = async () => {
    const userConfirmed = await showConfirmationModal("Are you sure you want to delete this character?");

    if (!userConfirmed) return;

    try {
      await deleteHero(id);
      toast.success("Character successfully deleted!");
      history.push(HEROES_ROUTE);
    } catch (error) {
      toast.error("Error deleting character.");
      console.error(error);
    }
  };

// Function for custom confirmation modal
  const showConfirmationModal = async (message) => {
    const result = await Swal.fire({
      title: "Confirmation",
      text: message,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete",
      cancelButtonText: "Cancel",
    });

    return result.isConfirmed;
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
                                  <img
                                          className={styles.main_hero_img}
                                          src={
                                            process.env.REACT_APP_DEMO_MODE
                                                    ?`${process.env.REACT_APP_API_URL_DEFAULT_DATA}${heroes.SuperheroImages[0].image}`
                                                    : `${process.env.REACT_APP_API_URL}${heroes.SuperheroImages[0].image}`
                                          || NoPhoto}
                                          alt="Hero"
                                  />

                            ) : (
                                  <p>Without Images</p>
                          )}

                          <div className={styles.info_hero}>
                            <h2 className={`${styles.label}`}>
                              Real name:
                            </h2>
                            <p>{heroes.real_name}</p>
                            <h2 className={styles.label}>
                              Catch phrase:
                            </h2>
                            <p>{heroes.catch_phrase}</p>
                          </div>
                        </div>

                        <div className={styles.info_hero}>
                          <h2 className={styles.label}>Superpowers:</h2>
                            {heroes.listSuperpowers.length > 0 ? (
                                    heroes.listSuperpowers.map((listSuperpower) => (
                                            <div className={styles.superpower_item} key={listSuperpower.id}>
                                              <p>{listSuperpower.titleSuperpower}</p>
                                            </div>
                                    ))
                            ) : (
                                    <>Without Superpowers</>
                            )}
                          <h2 className={styles.label}>
                            Origin description:
                          </h2>
                          <p>{heroes.origin_description}</p>
                          <h2 className={styles.label}>
                            Achievement:
                          </h2>
                          <p>{heroes.superpowers}</p>
                        </div>
                        <h2 className={styles.label}>Images:</h2>
                        <div className={styles.gallery}>
                          {heroes.SuperheroImages.length > 1 ? (
                                  heroes.SuperheroImages.map((itemImg) => (
                                          <div key={itemImg.id}>
                                            <img
                                                    src={
                                                      process.env.REACT_APP_DEMO_MODE
                                                              ? `${process.env.REACT_APP_API_URL_DEFAULT_DATA}${itemImg.image}`
                                                              : `${process.env.REACT_APP_API_URL}${itemImg.image}`
                                                    }
                                                    alt="Hero"
                                            />
                                          </div>
                                  ))
                          ) : (
                                  <p>Without Images</p>
                          )}
                        </div>
                      </>
              )}
            </div>

    );
};

export default HeroPage;
