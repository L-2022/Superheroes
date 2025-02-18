import React from "react";
import { useHistory } from "react-router-dom";
import { HERO_ROUTE } from "../../utils/consts";
import { changeHero } from "../../http/heroesAPI";
import styles from "../../styles/HeroForm.module.css";
import HeroForm from "./HeroForm";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function UpdateHero({ heroes, id }) {
  const history = useHistory();

  const handleSubmit = async (formData) => {
    try {
      const data = await changeHero(formData, id);

      if (process.env.REACT_APP_DEMO_MODE) {
        toast.warn("This is a demo version, you cannot create or change heroes here");
        history.push(HERO_ROUTE);
        return;
      }

      if (data) {
        toast.success("The hero was changed successfully");
        history.push(HERO_ROUTE);
      } else {
        toast.error("The hero has not been changed. Check the required fields.");
      }
    } catch (error) {
      if (error.response?.data?.error) {
        toast.error("The hero has not been updated. " + error.response.data.error);
      } else {
        toast.error("An error occurred: " + error.message);
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
