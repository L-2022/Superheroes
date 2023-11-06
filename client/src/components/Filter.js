import React, { useEffect, useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { fetchHeroes } from "../http/heroesAPI";
import styles from "../styles/filter.module.css";
import searchImage from "../assets/search.png";

export const Filter = observer(() => {
  const { heroes } = useContext(Context);
  useEffect(() => {
    fetchHeroes(
      heroes.page,
      heroes.limit,
      heroes.dateCreation,
      heroes.searchText
    ).then((data) => {
      heroes.setListSuperhero(data.superheroes);
      heroes.setTotalCount(data.total);
    });
  }, [
    heroes.page,
    heroes.limit,
    heroes.dateCreation,
    heroes.searchText,
    heroes,
  ]);

  const handleLimitChange = (event) => {
    const newLimit = event.target.value;
    heroes.setLimits(newLimit);
  };

  const handleDataChange = (event) => {
    const newDateCreation = event.target.value;
    heroes.setDateCreation(newDateCreation);
  };

  const handleSearch = (event) => {
    const newSearchText = event.target.value;
    heroes.setSearchText(newSearchText);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch(event);
    }
  };
  return (
    <div className={styles.wrapper__filter_search}>
      <div className={styles.filter}>
        <select
          className={styles.filter__select}
          id="limit"
          onChange={handleLimitChange}
          defaultValue={heroes.limit}
          value={heroes.limit}
        >
          <option className={styles.select} value={5} selected>
            5
          </option>
          <option className={styles.select} value={10}>
            10
          </option>
          <option className={styles.select} value={15}>
            15
          </option>
          <option className={styles.select} value={20}>
            20
          </option>
        </select>
        <select
          className={styles.filter__select}
          id="dateCreation"
          onChange={handleDataChange}
          defaultValue={heroes.dateCreation}
          value={heroes.dateCreation}
        >
          <option value={"new"} selected>
            new
          </option>
          <option className={styles.select} value={"old"}>
            old
          </option>
        </select>
        <label className={styles.search__input}>
          <img
            className={styles.search__img}
            onClick={handleSearch}
            src={searchImage}
            alt="search"
            width="35px"
            height="35px"
          />
          <input
            className={styles.search__input_text}
            type="text"
            name="text"
            defaultValue=""
            placeholder="Search"
            pattern=".{1,32}"
            value={heroes.searchText}
            onChange={(e) => heroes.setSearchText(e.target.value)}
            onKeyUp={handleKeyPress}
            required
          ></input>
        </label>
      </div>
    </div>
  );
});
