import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ListSingleArticle from "./ListSingleArticle";
import { getSingleArticle } from "../utils/api";

const ShowSingleArticle = () => {
  const [singleArticle, setSingleArticle] = useState({});
  const { article_id } = useParams();

  useEffect(() => {
    getSingleArticle(article_id).then((response) => {
      setSingleArticle(response);
    });
  }, [article_id]);

  return (
    <>
      <ListSingleArticle singleArticle={singleArticle} />
    </>
  );
};

export default ShowSingleArticle;
