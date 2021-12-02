import React, { useCallback, useMemo, useRef, useState } from 'react'

const getAverage = numbers => {
    console.log('평균계산중')
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((a, b) => a + b)
    return sum / numbers.length;
}

const Average = () => {

    const [list, setList] = useState([])
    const [number, setNumber] = useState('')
    const inputEl = useRef(null)

    const onChage = useCallback(e=> {
        setNumber(e.target.value)
    },[]) // 컴포넌트가 처음 렌더링 될 때만 함수 생성

    const onInsert = useCallback(() => {
        const nextList = list.concat(parseInt(number))
        setList(nextList)
        setNumber('')
        inputEl.current.focus()
    },[number, list]) // number or list가 바뀔 때만 함수 생성

    const avg = useMemo(() => getAverage(list), [list])

    return (
        <div>
            <input value={number} onChange={onChage} ref={inputEl}/>
            <button onClick={onInsert}>add</button>
            <ul>
                {list.map((value, index) => (
                    <li key={index}>{value}</li>
                ))}
            </ul>
            <div>
                <b>aver: </b> {avg}
            </div>
        </div>
    )
}

export default Average
