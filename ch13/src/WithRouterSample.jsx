import React from 'react'
// import {withRouter} from 'react-router-dom'

const WithRouterSample = ({location, match, history}) => {
    return (
        <div>
            <h4>Location</h4>
            <textarea
                value={JSON.stringify(location, null, 2)}
                rows={7}
                readOnly={true}
            />
            <textarea
                value={JSON.stringify(match, null, 2)}
                rows={7}
                readOnly={true}
            />
            <button onClick={() => history.push('/')}>go to home</button>
        </div>
    )
}

export default WithRouterSample
