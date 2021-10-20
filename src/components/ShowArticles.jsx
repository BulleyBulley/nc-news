import React, { useEffect, useState } from "react";
import ListArticles from "./ListArticles";
import { getArticles } from "../utils/Api";

const ShowArticles = (props) => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState (false)
  const [page, setPage] = useState(1)
  const { sortBy, orderBy, searchTerm, topicChoice } = props;

  useEffect(() => {
    console.log('calling api again')
    setIsLoading(true)
    getArticles(sortBy, orderBy, searchTerm, page, topicChoice).then((response) => {
      setArticles(response);
      setIsLoading(false)
    });
  }, [sortBy, orderBy, searchTerm, page, topicChoice]);

  return (
    <>
      <ListArticles articles={articles} page={page} setPage={setPage} />
    </>
  );
};

export default ShowArticles;
