import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import NewsItem from './NewsItem'
import usePromise from '../lib/usePromise'

const NewsListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
    width: 768px;
    margin: 0 auto;
    margin-top: 2rem;
    @media screen and (max-width: 768px) {
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
    }
`

const sampleArticle = {
    title: '제목',
    description: '내용',
    url: "https://google.com",
    urlToImage: "https://via.placeholder.com/160"
}

const NewsList = ({category}) => {
    // const [articles, setArticles] = useState(null)
    // const [loading, setLoading] = useState(false)

    // useEffect(() => {
    //     // async 함수
    //     const fetchData = async() => {
    //         setLoading(true)
    //         try {
    //             const query = category === 'all' ? '' : `&category=${category}`
    //             const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=cb4555c8522743e995a574b229d36f8c`)
    //             setArticles(response.data.articles)
    //         }
    //          catch (e) {
    //              console.log(e);
    //          }
    //          setLoading(false)
    //     }
    //     fetchData()
    // },[category])

    // // waiting
    // if (loading) {
    //     return <NewsListBlock>waiting...</NewsListBlock>
    // }
    // // articles not done yet
    // if (!articles) {
    //     return null
    // }

    // custom hook version
    const [loading, response, error] = usePromise(() => {
        const query = category === 'all' ? '' : `&category=${category}`
        return axios.get(`https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=cb4555c8522743e995a574b229d36f8c`)
    }, [category])

        if (loading) {
        return <NewsListBlock>waiting...</NewsListBlock>
    }
    // articles not done yet
    if (!response) {
        return null
    }
    if (error) {
        return <NewsListBlock>error!</NewsListBlock>
    }
    const {articles} = response.data
    return (
        <NewsListBlock>
            {articles && articles.map(article => (
                <NewsItem key={article.url} article={article} />
            ))}
        </NewsListBlock>
    )
}

export default NewsList
