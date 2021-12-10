import React, { useCallback, useReducer, useRef, useState } from 'react'
import TodoInsert from './components/TodoInsert'
import TodoList from './components/TodoList'
import TodoTemplate from './components/TodoTemplate'

function createBulkTodos() {
  const array = []
  for (let i = 1; i <= 2500; i++) {
    array.push({
      id: i,
      text: `할 일 ${i}`,
      checked: false
    })
  }
  return array
}

function todoReducer(todos, action) {
  switch (action.type) {
    case 'INSERT':
      return todos.concat(action.todo)
    case 'REMOVE':
      return todos.filter(todo => todo.id !== action.id)
    case 'TOGGLE':
      return todos.map(todo => todo.id === action.id ? { ...todo, checked: !todo.checked } : todo)
    default:
      return todos
  }
}

const App = () => {
  // useState의 함수형 업데이트
  // const [todos, setTodos] = useState(createBulkTodos)
  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos)

  const nextId = useRef(2501)

  const onInsert = useCallback(
    text => {
      const todo = {
        id: nextId.current,
        text,
        checked: false
      }
      // setTodos(todos => todos.concat(todo))
      dispatch({ type: 'INSERT', todo })
      nextId.current++
    }
    , [])

  const onRemove = useCallback(
    id => {
      // setTodos(todos => todos.filter(todo => todo.id !== id))
      dispatch({ type: 'REMOVE', id })
    }, []
  )

  const onToggle = useCallback(
    id => {
      // setTodos(todos =>
      //   todos.map(todo => todo.id === id ? { ...todo, checked: !todo.checked } : todo)
      // )
      dispatch({ type: 'TOGGLE', id })
    }, []
  )


  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  )
}

export default App