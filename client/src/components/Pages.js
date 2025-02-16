import React, { useEffect, useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { fetchHeroes } from "../http/heroesAPI";

import styles from "../styles/pages.module.css";

const Pages = observer(() => {
  const { heroes } = useContext(Context);

  useEffect(() => {
    fetchHeroes(heroes.page, heroes.limit, heroes.dateCreation, heroes.searchText).then((data) => {
      heroes.setListSuperhero(data.superheroes);
      heroes.setTotalCount(data.total);
    });
  }, [heroes.page, heroes.limit, heroes]);

  const pageCount = Math.ceil(heroes.totalCount / heroes.limit);
  const pages = [];

  for (let i = 0; i < pageCount; i++) {
    pages.push(i + 1);
  }

  return (
      <div className={styles.pagination}>
         {pages.map((page) => (
           <button
            key={page}
            className={page === heroes.page ? styles.active : styles.page}
             onClick={() => heroes.setPage(page)}
           >
            {page}
          </button>
         ))}
      </div>
  );
});

export default Pages;
