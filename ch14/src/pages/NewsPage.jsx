import React from 'react'
import { useMatch } from 'react-router-dom'
import Categories from '../components/Categories'
import NewsList from '../components/NewsList'

const NewsPage = ({match}) => {
    const category = match.params.category || 'all'
    // const test = useMatch()
    // console.log('match : ', test);
    return (
        <>
            <Categories />   
            <NewsList category={category} />
        </>
    )
}

export default NewsPage
