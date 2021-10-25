import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ListSingleArticle from "./ListSingleArticle";
import { getSingleArticle } from "../utils/Api";

const ShowSingleArticle = () => {
  const [singleArticle, setSingleArticle] = useState({});
  const [err, setErr] = useState(null);
  const { article_id } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setErr(false)
    setLoading(true);
    getSingleArticle(article_id).then((response) => {
      setSingleArticle(response);
      setLoading(false);
    }).catch((err) => {
      setLoading(false);
      setErr(true);

      return err
        
    });
  }, [article_id]);

  return (
    <>  
      
      <ListSingleArticle singleArticle={singleArticle} loading={loading}
        setLoading={setLoading}
        err={err}
        setErr={setErr}/>
      
    </>
  );
};

export default ShowSingleArticle;
