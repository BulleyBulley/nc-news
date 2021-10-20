import React, { useEffect, useState } from "react";
import ListArticles from "./ListArticles";
import { getArticles } from "../utils/Api";

const ShowArticles = (props) => {
  const [articles, setArticles] = useState([]);
  const { sortBy, orderBy, searchTerm, topicChoice } = props;

  useEffect(() => {
    getArticles(sortBy, orderBy, searchTerm, topicChoice).then((response) => {
      setArticles(response);
    });
  }, [sortBy, orderBy, searchTerm, topicChoice]);

  return (
    <>
      <ListArticles articles={articles} />
    </>
  );
};

export default ShowArticles;
