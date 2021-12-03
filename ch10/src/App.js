import React, { useCallback, useRef, useState } from 'react'
import TodoInsert from './components/TodoInsert'
import TodoList from './components/TodoList'
import TodoTemplate from './components/TodoTemplate'

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'learn react base',
      checked: true
    },
    {
      id: 2,
      text: 'component styling',
      checked: true
    },
    {
      id: 3,
      text: 'making todos',
      checked: false
    },
  ])

  const nextId = useRef(4)

  const onInsert = useCallback(
    text => {
      const todo = {
        id: nextId.current,
        text,
        checked: false
      }
      setTodos(todos.concat(todo))
      nextId.current++
    }
    , [todos])

  const onRemove = useCallback(
    id => {
      setTodos(todos.filter(todo => todo.id !== id))
    }, [todos]
  )

  const onToggle = useCallback(
    id => {
      setTodos(
        todos.map(todo => todo.id === id? {...todo, checked: !todo.checked} : todo)
      )
    }, [todos]
  )


  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
    </TodoTemplate>
  )
}

export default App
