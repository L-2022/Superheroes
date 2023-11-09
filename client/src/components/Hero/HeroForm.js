import React, { useState, useEffect } from "react";
import styles from "../../styles/HeroForm.module.css";

const HeroForm = ({ initialValues, onSubmit }) => {
  const [nickname, setNickname] = useState(initialValues?.nickname || "");
  const [realName, setRealName] = useState(initialValues?.real_name || "");
  const [originDescription, setOriginDescription] = useState(
    initialValues?.origin_description || ""
  );
  const [superpowers, setSuperpowers] = useState(
    initialValues?.superpowers || ""
  );
  const [catchPhrase, setCatchPhrase] = useState(
    initialValues?.catch_phrase || ""
  );
  const [listSuperpowers, setListSuperpowers] = useState(
    initialValues?.listSuperpowers || []
  );
  const [deleteSuperpower, setDeleteSuperpower] = useState([]);
  const [deleteSuperpowerId, setDeleteSuperpowerId] = useState([]);

  const [images, setImages] = useState(initialValues?.SuperheroImages || []);

  const [deleteImage, setDeleteImage] = useState([]);
  const [deleteImageId, setDeleteImageId] = useState([]);

  useEffect(() => {
    // Оновити поля форми при зміні ініціальних значень
    setNickname(initialValues?.nickname || "");
    setRealName(initialValues?.real_name || "");
    setOriginDescription(initialValues?.origin_description || "");
    setSuperpowers(initialValues?.superpowers || "");
    setCatchPhrase(initialValues?.catch_phrase || "");
    setListSuperpowers(initialValues?.listSuperpowers || []);
    setImages(initialValues?.SuperheroImages || []);
  }, [initialValues]);
  const addSuperpower = () => {
    if (listSuperpowers.length < 5) {
      setListSuperpowers([
        ...listSuperpowers,
        { titleSuperpower: "", id: Date.now() },
      ]);
    } else {
      alert("A maximum of 5 superpowers can be added");
    }
  };
  
  const removeSuperpower = (index) => {
    const newSuperpowers = [...listSuperpowers];
    newSuperpowers.splice(index, 1);
    setListSuperpowers(newSuperpowers);
  
    if (listSuperpowers[index].id) {
      setDeleteSuperpower([
        ...deleteSuperpower,
        listSuperpowers[index].titleSuperpower,
      ]);
      setDeleteSuperpowerId([...deleteSuperpowerId, listSuperpowers[index].id]);
    }
  };
  
  const changeSuperpower = (key, value, id) => {
    setListSuperpowers(
      listSuperpowers.map((i) =>
        i.id === id ? { ...i, [key]: value } : i
      )
    );
  };
  
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
    } else {
      alert("A maximum of 5 images can be uploaded");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      e.nativeEvent.submitter &&
      e.nativeEvent.submitter.className === styles.submit_btn
    ) {
      const formData = new FormData();
      formData.append("nickname", nickname);
      formData.append("realName", realName);
      formData.append("originDescription", originDescription);
      formData.append("superpowers", superpowers);
      formData.append("catchPhrase", catchPhrase);
      formData.append("listSuperpowers", JSON.stringify(listSuperpowers));

      deleteSuperpower.forEach((_, index) => {
        formData.append("deleteSuperpower", deleteSuperpower[index]);
      });

      deleteSuperpowerId.forEach((_, index) => {
        formData.append("deleteSuperpowerId", deleteSuperpowerId[index]);
      });

      deleteImage.forEach((_, index) => {
        formData.append("imageToDelete", deleteImage[index]);
      });

      deleteImageId.forEach((_, index) => {
        formData.append("imageToDeleteId", deleteImageId[index]);
      });

      images.forEach((image, index) => {
        if (image instanceof File) {
          formData.append(`images${index + 1}`, image);
        }
      });

      onSubmit(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.create_hero}>
      <div className={styles.create_hero__label_forms}>
        <label className={styles.label_form_item}>
          Nickname:
          <input
            className={styles.input_field}
            type="text"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
        </label>

        <label className={styles.label_form_item}>
          Real name:
          <input
            className={styles.input_field}
            type="text"
            value={realName}
            onChange={(e) => setRealName(e.target.value)}
          />
        </label>
        <label className={styles.label_form_item}>
          Catch phrase:
          <input
            className={styles.input_field}
            type="text"
            value={catchPhrase}
            onChange={(e) => setCatchPhrase(e.target.value)}
          />
        </label>
      </div>

      <label className={styles.label_form_description}>
        Origin description:
        <textarea
          className={styles.label_form_textarea}
          type="text"
          value={originDescription}
          onChange={(e) => setOriginDescription(e.target.value)}
        />
      </label>
      <label className={styles.label_form_description}>
        Achievement:
        <textarea
          className={styles.label_form_textarea}
          type="text"
          value={superpowers}
          onChange={(e) => setSuperpowers(e.target.value)}
        />
      </label>

      <label className={styles.label_img}>
  <button
    className={styles.input_field}
    variant={"outline-dark"}
    onClick={addSuperpower}
  >
    Add a new superpower
  </button>
</label>
<div className={styles.lists_superpoweres}>
  {listSuperpowers.map((i, index) => (
    <div className={styles.item_superpower} key={i.id}>
      <input
        className={styles.input_superpower}
        type="text"
        value={i.titleSuperpower}
        onChange={(e) =>
          changeSuperpower("titleSuperpower", e.target.value, i.id)
        }
        placeholder="Enter superpower name"
      />
      <button
        className={styles.remove_superpower}
        onClick={() => removeSuperpower(index)}
        variant={"outline-danger"}
      >
        X
      </button>
    </div>
  ))}
</div>
      <label className={styles.label_img}>
        Add Image:
        <input
          className={styles.input_field}
          type="file"
          onChange={handleFileChange}
        />
      </label>

      <div className={styles.create_hero__galery}>
        {images.map((image, index) => (
          <div className={styles.galery__item_img} key={index}>
            <img
              className={styles.galery__downloaded_img}
              src={
                image instanceof File
                  ? URL.createObjectURL(image)
                  : process.env.REACT_APP_API_URL + image.image
              }
              alt={"Heroe image:" + index + 1}
            />
            <button
              className={styles.galery__remove_button}
              onClick={() => removeImage(index)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className={styles.create_hero__btn}>
        <button className={styles.submit_btn} type="submit">
          Create
        </button>
      </div>
    </form>
  );
};

export default HeroForm;
