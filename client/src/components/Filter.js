import React, { useEffect, useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { fetchHeroes } from "../http/heroesAPI";
import styles from "../styles/filter.module.css";
import { AiOutlineSearch } from "react-icons/ai"; // Імпортуємо іконку

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
          <div className={styles.filter_search_wrapper}>
            <div className={styles.filter}>
              <label className={styles.search}>
                <AiOutlineSearch
                        className={styles.search__icon}
                        onClick={handleSearch}
                        size={35}
                />
                <input
                        autoComplete="off"
                        type="text"
                        name="text"
                        placeholder="Search"
                        value={heroes.searchText}
                        onChange={(e) => heroes.setSearchText(e.target.value)}
                        onKeyUp={handleKeyPress}
                        required
                />
              </label>
              <select
                      className={styles.filter__select}
                      id="limit"
                      onChange={handleLimitChange}
                      value={heroes.limit}
              >
                <option className={styles.filter__option} value={5}>5</option>
                <option className={styles.filter__option} value={10}>10</option>
                <option className={styles.filter__option} value={15}>15</option>
                <option className={styles.filter__option} value={20}>20</option>
              </select>
              <select
                      className={styles.filter__select}
                      id="dateCreation"
                      onChange={handleDataChange}
                      value={heroes.dateCreation}
              >
                <option className={styles.filter__option} value="new">new</option>
                <option className={styles.filter__option} value="old">old</option>
              </select>
            </div>
          </div>

  );
});
