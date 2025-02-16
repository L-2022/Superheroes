import React, { useEffect, useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { fetchHeroes } from "../http/heroesAPI";
import styles from "../styles/filter.module.css";
import { AiOutlineSearch } from "react-icons/ai";
import { CustomSelector } from "./customSelector/CustomSelector";

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
                        onChange={handleSearch}
                        onKeyUp={handleKeyPress}
                        required
                />
              </label>
                    <CustomSelector
                            selectors={[
                                { title: "Newest", selector: "new" },
                                { title: "Oldest", selector: "old" },
                            ]}
                            id="dateCreation"
                            onChange={(value) => heroes.setDateCreation(value)}
                            value={heroes.dateCreation}
                    />

                    <CustomSelector
                            selectors={[
                                { title: "5", selector: "5" },
                                { title: "10", selector: "10" },
                                { title: "15", selector: "15" },
                                { title: "20", selector: "20" },
                            ]}
                            onChange={(value) => heroes.setLimits(value)}
                            value={heroes.limit}
                    />
            </div>
          </div>
  );
});
