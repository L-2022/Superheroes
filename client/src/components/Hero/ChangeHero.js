import React, { useState } from "react";
import styles from "../../pages/CreateHero.module.css";
import { changeHero } from "../../http/heroesAPI";
import { useHistory } from "react-router-dom";
import { HERO_ROUTE } from "../../utils/consts";

const ChangeHero = ({ heroes, id }) => {
  const history = useHistory();
  const [nickname, setNickname] = useState(heroes.nickname || "");
  const [realName, setRealName] = useState(heroes.real_name || "");
  const [originDescription, setOriginDescription] = useState(
    heroes.origin_description || ""
  );
  const [superpowers, setSuperpowers] = useState(heroes.superpowers || "");
  const [catchPhrase, setCatchPhrase] = useState(heroes.catch_phrase || "");
  const [images, setImages] = useState(heroes.SuperheroImages || []);
  const [deleteImage, setDeleteImage] = useState([]);
  const [deleteImageId, setDeleteImageId] = useState([]);

  const addImage = (image) => {
    if (images.length < 5) {
      setImages([...images, image]);
    } else {
      alert("A maximum of 5 images can be uploaded");
    }
  };

  const removeImage = (index) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
    if (images[index].id) {
      setDeleteImage([...deleteImage, images[index].image]);
      setDeleteImageId([...deleteImageId, images[index].id]);
    }
  };

  const handleFileChange = (e) => {
    if (images.length < 5) {
      addImage(e.target.files[0]);
      setImages([...images, e.target.files[0]]);
    } else {
      alert("A maximum of 5 images can be uploaded");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Перевіряємо, чи була натиснута кнопка "Create"
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
      
      deleteImage.forEach((_, index) => {
        formData.append("imageToDelete", deleteImage[index])
      });

      deleteImageId.forEach((_, index) => {
        formData.append("imageToDeleteId", deleteImageId[index]);
      });

      images.forEach((image, index) => {
        if (image instanceof File) {
          formData.append(`images${index + 1}`, image);
        }
      });
      try {
        const data = await changeHero(formData, id);
        if (data) {
          alert("The hero was changed successfully");
          history.push(HERO_ROUTE);
        } else {
          alert("The hero has not been changed");
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
            <div className={styles.imageGallery} key={index}>
              <img
                className={styles.img}
                src={
                  image instanceof File
                    ? URL.createObjectURL(image)
                    : process.env.REACT_APP_API_URL + image.image
                }
                alt={"Heroe image:" + index + 1}
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
};

export default ChangeHero;
