import React from 'react'
import { Link, Route, Routes, useParams } from 'react-router-dom'
import Profile from './Profile'
import WithRouterSample from './WithRouterSample'


const Profiles = () => {

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
            <Routes>
                <Route path="/profiles" render={() => <NonProfiles />} />
                <Route path="/profiles/:username" element={<Profile />} />
            </Routes>
            {/* <WithRouterSample /> */}
        </div>
    )
}

const NonProfiles = () => {
    return <div>사용자를 선택해주세요</div>
}

export default Profiles
