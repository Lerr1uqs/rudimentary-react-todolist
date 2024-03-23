import { Todo } from "../types";

interface TodoItemProps {
    todo: Todo;
    deleteTodo: (id: number) => void;
    toggleTodo: (id: number) => void;
}

function TodoItem({todo, deleteTodo, toggleTodo}: TodoItemProps) {
    return (
        <li style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>
            {todo.text}
            <button onClick={() => toggleTodo(todo.id)}>toggle</button>
            <button onClick={() => deleteTodo(todo.id)}>delete</button>
        </li>
    )
}

export default TodoItem