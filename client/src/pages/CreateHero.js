import React from "react";
import { useHistory } from "react-router-dom";
import { HERO_ROUTE } from "../utils/consts";
import { createHero } from "../http/heroesAPI";
import styles from "../styles/HeroForm.module.css"
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import HeroForm from "../components/Hero/HeroForm";



function CreateHero() {
  const history = useHistory();

  const handleSubmit = async (formData) => {
    try {
      const data = await createHero(formData);
      if (process.env.REACT_APP_DEMO_MODE) {
        toast.warn("This is a demo version, you cannot create or change heroes here");
        history.push(HERO_ROUTE);
        return;
      }
      if (data) {
        toast.error("The hero was successfully created");
        history.push(HERO_ROUTE);
      } else {
        toast.error("The hero has not been created. Check the required fields.");
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        toast.error("The hero has not been created. " + error.response.data.error);
      } else {
        toast.error("An error occurred: " + error.message);
      }

    }
  };

  return (
    <div className={styles.create_hero_wrapper}>
      <HeroForm initialValues={{}} onSubmit={handleSubmit} />
    </div>
  );
}

export default CreateHero;
