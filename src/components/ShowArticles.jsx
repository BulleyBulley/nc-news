import React, { useEffect, useState } from 'react';
import ListArticles from './ListArticles';
import { getArticles } from '../utils/Api';

const ShowArticles = (props) => {
    const [articles, setArticles] = useState([])
    const { sortBy } = props
    const { orderBy } = props
    
    
    useEffect(() => {
        getArticles(sortBy, orderBy).then((response) => {
            setArticles(response)
        })
    },[sortBy, orderBy])

    return (
        <>
            <ListArticles articles={articles}/>
        </>
    )
}

export default ShowArticles