import React, { useEffect, useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { Row } from "react-bootstrap";
import HeroItem from "./Hero/HeroItem";
import { fetchHeroes } from "../http/heroesAPI";
import { Pagination } from "react-bootstrap";

const HeroList = observer(() => {
  const { heroes } = useContext(Context);

  useEffect(() => {
    fetchHeroes(heroes.page, heroes.limit).then((data) => {
      heroes.setListSuperhero(data.superheroes);
      heroes.setTotalCount(data.total);
    });
  }, [heroes.page, heroes.limit, heroes]);

  const handleLimitChange = (event) => {
    const newLimit = event.target.value;
    heroes.setLimits(newLimit);
  };

  const pageCount = Math.ceil(heroes.totalCount / heroes.limit);
  const pages = [];

  for (let i = 0; i < pageCount; i++) {
    pages.push(i + 1);
  }

  return (
    <>
      <div className={"styles.selectFilter"}>
        <select id="limit" onChange={handleLimitChange} defaultValue={heroes.limit} value={heroes.limit}>
          
          <option value={5} selected>
            5
          </option>
          <option value={10}>10</option>
          <option value={15}>15</option>
          <option value={20}>20</option>
        </select>
      </div>
      <Pagination className="mt-3">
        {pages.map((page) => (
          <Pagination.Item
            key={page}
            active={pages === page}
            onClick={() => heroes.setPage(page)}
          >
            {page}
          </Pagination.Item>
        ))}
      </Pagination>

      <Row className="d-flex">
        {heroes.listSuperhero.map((el, key) => (
          <>
            <HeroItem key={key} superhero={el} />
          </>
        ))}
      </Row>
    </>
  );
});

export default HeroList;
