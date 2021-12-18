import React from 'react'
import { useLocation } from 'react-router-dom'
import qs from 'qs'

const About = () => {
    const location = useLocation()
    console.log(location)
    const query = qs.parse(location.search, {
        ignoreQueryPrefix: true
    })

    const showDetail = query.detail === 'true'
    console.log('query : ', query)
    console.log('query.detail : ', query.detail)
    return (
        <div>
           <h1>소개</h1> 
           <p>이 프로젝트는 리액트 라우터 기초 실습 예제입니다.</p>
           {showDetail && <p>detail 값을 true로 설정하셨군요!</p>}
        </div>
    )
}

export default About
