import React, { useEffect, useState } from 'react';
import ListArticles from './ListArticles';
import { getArticles } from '../utils/Api';

const ShowArticles = (props) => {
    const [articles, setArticles] = useState([])
    const { sortBy, setSortBy } = props
    
    
    useEffect(() => {
        getArticles(sortBy).then((response) => {
            setArticles(response)
        })
    },[sortBy])

    return (
        <>
            <ListArticles articles={articles}/>
        </>
    )
}

export default ShowArticles