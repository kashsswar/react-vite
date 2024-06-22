import React, {useState} from 'react'
import { useDispatch } from 'react-redux'

import { addTodo } from '../features/todo/todoSlice'

function AddTodo(){

    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const addTodoHandler=(e)=>{
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }

    return (
        <form onSubmit={addTodoHandler} style={{ display: 'flex', gap: '0.75rem', marginTop: '3rem' }}>
            <input
                type="text"
                style={{
                    backgroundColor: '#2d3748',
                    borderRadius: '0.5rem',
                    border: '1px solid #4a5568',
                    color: '#e2e8f0',
                    padding: '0.25rem 0.75rem',
                    fontSize: '1rem',
                    outline: 'none',
                    transition: 'border-color 200ms ease-in-out, box-shadow 200ms ease-in-out',
                    flex: 1,
                }}
                placeholder="Enter a Todo..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onFocus={(e) => {
                    e.target.style.borderColor = '#6366f1';
                    e.target.style.boxShadow = '0 0 0 2px #4338ca';
                }}
                onBlur={(e) => {
                    e.target.style.borderColor = '#4a5568';
                    e.target.style.boxShadow = 'none';
                }}
            />
            <button
                type="submit"
                style={{
                    backgroundColor: '#6366f1',
                    border: 'none',
                    padding: '0.5rem 1.5rem',
                    color: '#fff',
                    borderRadius: '0.5rem',
                    fontSize: '1.125rem',
                    cursor: 'pointer',
                    transition: 'background-color 200ms ease-in-out',
                    outline: 'none',
                }}
                onMouseOver={(e) => (e.target.style.backgroundColor = '#4f46e5')}
                onMouseOut={(e) => (e.target.style.backgroundColor = '#6366f1')}
            >
                Add Todo
            </button>
        </form>
    );
    
}

export default AddTodo