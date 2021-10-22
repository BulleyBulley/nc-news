import React, { useEffect, useState } from "react";
import ListArticles from "./ListArticles";
import { getArticles } from "../utils/Api";

const ShowArticles = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [err, setErr] = useState(null);
  const { sortBy, orderBy, searchTerm, topicChoice } = props;

  useEffect(() => {
    console.log("calling api again");
    setLoading(true);
    getArticles(sortBy, orderBy, searchTerm, page, topicChoice)
      .then((response) => {
        setArticles(response);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setErr("Oh No! Error");
      });
  }, [sortBy, orderBy, searchTerm, page, topicChoice]);

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
