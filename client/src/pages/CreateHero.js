import React from "react";
import { useHistory } from "react-router-dom";
import { HERO_ROUTE } from "../utils/consts";
import { createHero } from "../http/heroesAPI";
import styles from "../styles/HeroForm.module.css"
import HeroForm from "../components/Hero/HeroForm";

function CreateHero() {
  const history = useHistory();

  const handleSubmit = async (formData) => {
    try {
      const data = await createHero(formData);

      if (data) {
        alert("The hero was successfully created");
        history.push(HERO_ROUTE);
      } else {
        alert("The hero has not been created. Check the required fields.");
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        alert("The hero has not been created. " + error.response.data.error);
      } else {
        alert("An error occurred: " + error.message);
      }
    }
  };

  return (
    <div className={styles.create_hero_wrapper}>
      <h2>Create Superhero</h2>
      <HeroForm initialValues={{}} onSubmit={handleSubmit} />
    </div>
  );
}

export default CreateHero;
