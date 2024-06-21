import useTodo from '../context/Todocontext.jsx'


function TodoItem({todo}){

    const [isTodoEditable, setIsTodoEditable]= useState(false)
    const [todoMsg, setTodoMsg] = useState(todo.todo)
    const {updateTodo, deleteTodo, toggleComplete} = useTodo()

    const editTodo = () => {
      updateTodo(todo.id, {...todo, todo: todoMsg})
      setIsTodoEditable(false)
    }
    const toggleCompleted = () => {
      //console.log(todo.id);
      toggleComplete(todo.id)
    }


return (
    <>
        <div
            style={{
                display: 'flex',
                border: '1px solid rgba(0, 0, 0, 0.1)',
                borderRadius: '0.5rem',
                padding: '0.375rem 0.75rem',
                gap: '0.75rem',
                boxShadow: '0 1px 3px rgba(255, 255, 255, 0.5)',
                transitionDuration: '300ms',
                color: 'black',
                backgroundColor: todo.completed ? '#c6e9a7' : '#ccbed7'
            }}
        >
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={toggleCompleted}
            />
            <input
                type="text"
                style={{
                    border: isTodoEditable ? '1px solid rgba(0, 0, 0, 0.1)' : '1px solid transparent',
                    outline: 'none',
                    width: '100%',
                    backgroundColor: 'transparent',
                    borderRadius: '0.5rem',
                    padding: isTodoEditable ? '0 0.5rem' : '0',
                    textDecoration: todo.completed ? 'line-through' : 'none'
                }}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />

            {/* Edit, Save Button */}
            <button
                style={{
                    display: 'inline-flex',
                    width: '2rem',
                    height: '2rem',
                    borderRadius: '0.5rem',
                    fontSize: '0.875rem',
                    border: '1px solid rgba(0, 0, 0, 0.1)',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'rgba(240, 240, 240)',
                    cursor: todo.completed ? 'not-allowed' : 'pointer',
                    opacity: todo.completed ? 0.5 : 1
                }}
                onClick={() => {
                    if (todo.completed) return;

                    if (isTodoEditable) {
                        editTodo();
                    } else setIsTodoEditable((prev) => !prev);
                }}
                disabled={todo.completed}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                style={{
                    display: 'inline-flex',
                    width: '2rem',
                    height: '2rem',
                    borderRadius: '0.5rem',
                    fontSize: '0.875rem',
                    border: '1px solid rgba(0, 0, 0, 0.1)',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'rgba(240, 240, 240)',
                    cursor: 'pointer'
                }}
                onClick={() => deleteTodo(todo.id)}
            >
                ❌
            </button>
        </div>
    </>
);

}
export default TodoItem