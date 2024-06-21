import { useContext, createContext } from 'react';

// Define the TodoContext with the default values
export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "Todo msg",
            completed: false
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {} // Use colon instead of semicolon
});

// Export the TodoProvider component
export const TodoProvider = TodoContext.Provider;

// Custom hook to use the TodoContext
export default function useTodo() {
    return useContext(TodoContext);
}
