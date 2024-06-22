import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

function Todos(){

    const todos = useSelector(state=>state.todos)
    const dispatch = useDispatch()

    return(
        <>

    <div>
        <div>Todos</div>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
            {todos.map((todo) => (
                <li
                    key={todo.id}
                    style={{
                        marginTop: '1rem',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        backgroundColor: '#27272a',
                        padding: '0.5rem 1rem',
                        borderRadius: '0.5rem',
                    }}
                >
                    <div style={{ color: 'white' }}>{todo.text}</div>
                    <button
                        onClick={() => dispatch(removeTodo(todo.id))}
                        style={{
                            color: 'white',
                            backgroundColor: '#ef4444',
                            border: 'none',
                            padding: '0.25rem 1rem',
                            borderRadius: '0.375rem',
                            fontSize: '1rem',
                            cursor: 'pointer',
                            outline: 'none',
                            transition: 'background-color 200ms ease-in-out',
                        }}
                        onMouseOver={(e) => (e.target.style.backgroundColor = '#dc2626')}
                        onMouseOut={(e) => (e.target.style.backgroundColor = '#ef4444')}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            style={{ width: '1.5rem', height: '1.5rem' }}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                            />
                        </svg>
                    </button>
                </li>
            ))}
        </ul>
    </div>



        </>
    )
}

export default Todos