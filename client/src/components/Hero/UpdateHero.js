import React from "react";
import { useHistory } from "react-router-dom";
import { HERO_ROUTE } from "../../utils/consts";
import { changeHero } from "../../http/heroesAPI";
import styles from "../../styles/HeroForm.module.css";
import HeroForm from "./HeroForm";

function UpdateHero({ heroes, id }) {
  const history = useHistory();

  const handleSubmit = async (formData) => {
    try {
      const data = await changeHero(formData, id);

      if (data) {
        alert("The hero was changed successfully");
        history.push(HERO_ROUTE);
      } else {
        alert("The hero has not been changed");
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        alert("The hero has not been updated. " + error.response.data.error);
      } else {
        alert("An error occurred: " + error.message);
      }
    }
  };

  return (
    <div className={styles.create_hero_wrapper}>
      <h2>Update Superhero</h2>
      <HeroForm initialValues={heroes} onSubmit={handleSubmit} />
    </div>
  );
}

export default UpdateHero;
