import React, { useEffect, useState } from 'react';
import ListArticles from './ListArticles';
import { getArticles } from '../utils/api';
import { useParams } from 'react-router';

const ShowArticles = () => {
    const [articles, setArticles] = useState([])
    const { sort_by } = useParams()
    
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