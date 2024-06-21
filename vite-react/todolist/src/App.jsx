import { useState, useEffect } from 'react'
import {TodoProvider} from './context/Todocontext'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev] )
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo )))

    
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const toggleComplete = (id) => {
    //console.log(id);
    setTodos((prev) => 
    prev.map((prevTodo) => 
      prevTodo.id === id ? { ...prevTodo, 
        completed: !prevTodo.completed } : prevTodo))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  



  return (
  <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
    <form onSubmit={addTodo} style={{ display: 'flex' }}>
        <input
            type="text"
            placeholder="Write Todo..."
            style={{
                width: '100%',
                border: '1px solid rgba(0, 0, 0, 0.1)',
                borderTopLeftRadius: '0.5rem',
                borderBottomLeftRadius: '0.5rem',
                padding: '0.375rem 0.75rem',
                outline: 'none',
                transition: 'all 150ms ease-in-out',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                fontSize: '1rem',
            }}
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
        />
        <button
            type="submit"
            style={{
                borderTopRightRadius: '0.5rem',
                borderBottomRightRadius: '0.5rem',
                padding: '0.375rem 0.75rem',
                backgroundColor: '#16a34a',
                color: 'white',
                cursor: 'pointer',
                flexShrink: 0,
                border: 'none',
                fontSize: '1rem',
            }}
        >
            Add
        </button>
    </form>
    </TodoProvider>
);

}

export default App