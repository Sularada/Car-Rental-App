import React from "react";
import CardListSection from "../../organisms/CardListSection";
import FilterSection from "../../organisms/FilterSection";

const HomeTemplate = ({ models, setFilters, filters }) => {
  return (
    <>
      <FilterSection models={models} setFilters={setFilters} />
      <CardListSection filters={filters} />
    </>
  );
};

export default HomeTemplate;
