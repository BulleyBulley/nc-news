import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import { getCommentsByArticle } from "../utils/Api";
import ListComments from "./ListComments";

const ShowComments = () => {
    const [comments, setComments] = useState([])
  const { article_id } = useParams();

   useEffect(() => {
    getCommentsByArticle(article_id).then((response) => {
      setComments(response);
    })
  }, [article_id])

  return (
    <>
      <ListComments comments={comments} />
    </>
  );
};

export default ShowComments;
