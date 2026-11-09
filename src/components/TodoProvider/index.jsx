import { useState } from "react";
import TodoContext from "./TodoContext";

export function TodoProvider({ children }) {
    const [todos, setTodos] = useState([
        {
            id: 1,
            description: "JSX e componentes",
            completed: false,
            createdAt: "2022-10-31"
        },
        {
            id: 5,
            description: "Controle de inputs e formulários controlados",
            completed: true,
            createdAt: "2022-10-31"
        }
    ])

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
            console.log('Id de todo:' + todo.id);
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