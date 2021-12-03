import React, { useState } from 'react'

const Say = () => {
    const [message, setMessage] = useState('')
    const onClickEnter = () => setMessage('hello!')
    const onClickLeave = ()=> setMessage('bye bye')
    return (
        <div>   
            <button onClick={onClickEnter}>enter</button>
            <button onClick={onClickLeave}>leave</button>
            <h1>{message}</h1>
        </div>
    )
}

export default Say
