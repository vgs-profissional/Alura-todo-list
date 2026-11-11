import { useEffect, useState } from "react";
import TodoContext from "./TodoContext";
const TODOS = 'todos'

const savedTodos = localStorage.getItem(TODOS)
export function TodoProvider({ children }) {
    const [todos, setTodos] = useState(savedTodos ? JSON.parse(savedTodos) : [])

    useEffect(() => {
        localStorage.setItem(TODOS, JSON.stringify(todos))
    }, [todos])

    const addTodo = (formData) => {
        const description = formData.get('description')
        setTodos(prevState => {
            const newTodo = {
                id: prevState.length + 1,
                description,
                completed: false,
                createdAt: new Date().toISOString()
            }
            console.log(prevState);
            return [...prevState, newTodo]
        })
    }

    const toggleTodoCompleted = (todos) => {
        setTodos(prevState => {
            return prevState.map(t => {
                if (t.id == todos.id) {
                    return { ...t, completed: !t.completed }
                }
                return t
            })
        })
    }

    const removeTodo = (todo) => {
        setTodos(prevState => {
            return prevState.filter(t => t.id != todo.id)
        })
    }
    return (
        <TodoContext
            value={{
                todos,
                addTodo,
                removeTodo,
                toggleTodoCompleted
            }}
        >
            {children}
        </TodoContext>
    )
}