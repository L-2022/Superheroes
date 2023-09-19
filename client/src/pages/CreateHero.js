import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { HERO_ROUTE } from "../utils/consts";
import { createHero } from "../http/heroesAPI";
import styles from "./CreateHero.module.css";

function CreateHero() {
  const history = useHistory();
  const [nickname, setNickname] = useState("");
  const [realName, setRealName] = useState("");
  const [originDescription, setOriginDescription] = useState("");
  const [superpowers, setSuperpowers] = useState("");
  const [catchPhrase, setCatchPhrase] = useState("");
  const [images, setImages] = useState([]);

  const handleFileChange = (e) => {
    if (images.length < 5) {
      setImages([...images, e.target.files[0]]);
    } else {
      alert("A maximum of 5 images can be uploaded");
    }
  };

  const removeImage = (index) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      e.nativeEvent.submitter &&
      e.nativeEvent.submitter.className === styles.submitButton
    ) {
      const formData = new FormData();
      formData.append("nickname", nickname);
      formData.append("realName", realName);
      formData.append("originDescription", originDescription);
      formData.append("superpowers", superpowers);
      formData.append("catchPhrase", catchPhrase);
      images.forEach((image, index) => {
        formData.append(`image${index + 1}`, image);
      });

      try {
        const data = await createHero(formData);

        if (data) {
          alert("The hero was successfully created");
          history.push(HERO_ROUTE);
        } else {
          alert("The hero was not created");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  return (
    <div className={styles.createHeroContainer}>
      <h2>Create Superhero</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label className={styles.formLabelName}>
            Nickname:
            <input
              className={styles.inputField}
              type="text"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
            />
          </label>
          <div className={styles.container}>
            <label className={styles.formLabel}>
              Real name:
              <input
                className={styles.inputField}
                type="text"
                value={realName}
                onChange={(e) => setRealName(e.target.value)}
              />
            </label>

            <label className={styles.formLabel}>
              Catch phrase:
              <input
                className={styles.inputField}
                type="text"
                value={catchPhrase}
                onChange={(e) => setCatchPhrase(e.target.value)}
              />
            </label>
          </div>
        </div>
        <div className={styles.container}>
          <label className={styles.formLabel}>
            Origin description:
            <textarea
              className={styles.inputField}
              type="text"
              value={originDescription}
              onChange={(e) => setOriginDescription(e.target.value)}
            />
          </label>
          <label className={styles.formLabel}>
            Superpowers:
            <textarea
              className={styles.inputField}
              type="text"
              value={superpowers}
              onChange={(e) => setSuperpowers(e.target.value)}
            />
          </label>
        </div>
        <label className={styles.formLabel}>
          Add Image:
          <input
            className={styles.inputField}
            type="file"
            onChange={handleFileChange}
          />
        </label>

        <div className={styles.uploadedImages}>
          {images.map((image, index) => (
            <div className={styles.imageGallery}>
              <img
                className={styles.img}
                src={URL.createObjectURL(image)}
                alt=""
              />

              <button
                className={styles.removeButton}
                onClick={() => removeImage(index)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        <div className={styles.formLabel}>
          <button className={styles.submitButton} type="submit">
            Create
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateHero;
