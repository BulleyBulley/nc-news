import React, { useEffect, useState } from 'react';
import ListArticles from './ListArticles';
import { getArticles } from '../utils/Api';

const ShowArticles = () => {
    const [articles, setArticles] = useState([])
    
    useEffect(() => {
        getArticles().then((response) => {
            setArticles(response)
        })
    },[])

    return (
        <>
            <ListArticles articles={articles}/>
        </>
    )
}

export default ShowArticles