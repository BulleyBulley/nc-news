import React, { useEffect, useState } from "react";
import ListArticles from "./ListArticles";
import { getArticles } from "../utils/Api";

const ShowArticles = (props) => {
  const [articles, setArticles] = useState([]);
  const { sortBy, orderBy, searchTerm } = props;

  useEffect(() => {
    getArticles(sortBy, orderBy, searchTerm).then((response) => {
      setArticles(response);
    });
  }, [sortBy, orderBy, searchTerm]);

  return (
    <>
      <ListArticles articles={articles} />
    </>
  );
};

export default ShowArticles;
