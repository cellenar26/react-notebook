import React, { useCallback, useState } from 'react'
import axios from 'axios'
import NewsList from './components/NewsList'
import Categories from './components/Categories'

import NewsPage from './pages/NewsPage'
import { Route, Router } from 'react-router-dom'

const App = () => {
  // key : cb4555c8522743e995a574b229d36f8c
  // https://newsapi.org/v2/top-headlines?country=kr&apiKey=cb4555c8522743e995a574b229d36f8c
  // https://newsapi.org/v2/top-headlines?country=kr&category=business&apiKey=cb4555c8522743e995a574b229d36f8c

  const [category, setCategory] = useState('all')
  const onSelect = useCallback(category => setCategory(category), [])

  return (
    <>
      {/* <Categories category={category} onSelect={onSelect}/>
      <NewsList category={category}/> */}
      <Route path="/:category?" component={NewsPage} />
    </>
  )
}

export default App
