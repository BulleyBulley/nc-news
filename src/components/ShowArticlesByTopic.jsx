import React, { useEffect, useState } from "react";
import ListArticles from "./ListArticles";
import { getArticles } from "../utils/Api";
import { useParams } from "react-router";

const ShowArticlesByTopic = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [err, setErr] = useState(null);
  const { sortBy, orderBy, searchTerm, topicChoice, setTopicChoice } = props;
  const { topic }  = useParams()

  useEffect(() => {
     setLoading(true);
    getArticles(sortBy, orderBy, searchTerm, page, topicChoice)
      .then((response) => {
        setTopicChoice(topic)
        setArticles(response);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setErr("Oh No! Error");
      });
  }, [sortBy, orderBy, searchTerm, page, topicChoice, topic, setTopicChoice]);

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

export default ShowArticlesByTopic;
