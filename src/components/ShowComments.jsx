import React, { useEffect } from "react";
import { useParams } from "react-router";

import { getCommentsByArticle } from "../utils/Api";
import ListComments from "./ListComments";

const ShowComments = (props) => {
  const { comments, setComments } = props;
   const { article_id } = useParams();

  useEffect(() => {
    getCommentsByArticle(article_id).then((response) => {
      setComments(response);
    });
    // eslint-disable-next-line
  }, [comments]);

  return (
    <>
      <ListComments comments={comments} />
    </>
  );
};

export default ShowComments;
