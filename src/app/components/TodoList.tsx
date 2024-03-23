import {Todo} from "../types"
import TodoFilter from "./TodoFilter";
import TodoItem from "./TodoItem";

interface TodoListProps {
    todos: Array<Todo>;
    deleteTodo: (id: number) => void;
    toggleTodo: (id: number) => void;
}

function TodoList({todos, deleteTodo, toggleTodo}: TodoListProps) {
    return (
        <ul>
            {todos.map(todo => (
                <TodoItem 
                    key={todo.id} 
                    deleteTodo={deleteTodo} 
                    toggleTodo={toggleTodo} 
                    todo={todo}
                ></TodoItem>
            ))}
        </ul>
    )
}

export default TodoList