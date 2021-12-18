import React from 'react'
import { Link, Route, useParams } from 'react-router-dom'

const data = {
    velopert: {
        name: '김민준',
        description: '리액트를 좋아하는 개발자'
    },
    gildong: {
        name: '홍길동',
        description: '고전 소설 홍길동전의 주인공'
    }
}

const Profiles = () => {
    
    const { username } = useParams()
    const profile = data[username]
    console.log(username);
    if (!profile) {
        return <div>존지하지 않는 사용자입니다!</div>
    }
    return (
        <div>
            <h3>사용자 목록:</h3>
            <ul>
                <li>
                    <Link to="/profiles/velopert">velopert</Link>
                </li>
                <li>
                    <Link to="/profiles/gildong">gildong</Link>
                </li>
            </ul>
            
            <Route path="/profiles" render={() => <div>사용자를 선택해주세요</div>} />
            
        </div>
    )
}

export default Profiles
