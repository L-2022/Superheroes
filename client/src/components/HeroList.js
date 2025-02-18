import React, { useEffect, useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { fetchHeroes } from "../http/heroesAPI";
import HeroItem from "./Hero/HeroItem";
import styles from "../styles/HeroItemt.module.css";

const HeroList = observer(() => {
  const { heroes } = useContext(Context);

  useEffect(() => {
    fetchHeroes(heroes.page, heroes.limit).then((data) => {
      heroes.setListSuperhero(data.superheroes);
      heroes.setTotalCount(data.total);
    });
  }, [heroes.page, heroes.limit, heroes]);

  return (<>



            {heroes.listSuperhero.length > 0 ? (
                    <div className={styles.wrapper_heroes}>

                      {heroes.listSuperhero.map((el, key) => (
                              <HeroItem key={key} superhero={el} />
                      ))}

                    </div>  ) : (
                    <p className={styles.message}>Not found heroes</p>
            )}
          </>
  );
});

export default HeroList;
