import React, { useEffect, useState } from "react";
import ListArticles from "./ListArticles";
import { getArticles } from "../utils/Api";

const ShowArticles = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [err, setErr] = useState(null);
  const { sortBy, orderBy, searchTerm, topicChoice, setTopicChoice } = props;

  useEffect(() => {
     setLoading(true);
    getArticles(sortBy, orderBy, searchTerm, page, topicChoice, setTopicChoice)
      .then((response) => {
        setTopicChoice(topicChoice)
        setArticles(response);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setErr("Oh No! Error");
      });
  }, [sortBy, orderBy, searchTerm, page, topicChoice, setTopicChoice]);

  return (
    <>
      <ListArticles
        articles={articles}
        page={page}
        setPage={setPage}
        loading={loading}
        setLoading={setLoading}
        err={err}
        setErr={setErr}
      />
    </>
  );
};

export default ShowArticles;
