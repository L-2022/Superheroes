import React from "react";
import { observer } from "mobx-react-lite";
import HiroList from "../components/HeroList";
import { Filter } from "../components/Filter"
import Pages from "../components/Pages";


const Heroes = observer(() => {
  return (
    <>
      <Filter/>
      <Pages />
      <HiroList />
    </>
  );
});

export default Heroes;
