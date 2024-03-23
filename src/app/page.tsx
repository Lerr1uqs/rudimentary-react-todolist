"use client";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import TodoFilter from "./components/TodoFilter";
import TodoItem from "./components/TodoItem";
import { Todo } from "./types";
import { useState } from "react";


export default function Home() {

    const [todos, setTodos] = useState<Todo[]>([])

    const [filter, setFilter] = useState("all")

    const addTodo = (text: string) => {
        const newTodo = {
            id: Date.now(),
            text,
            completed: false
        }
        setTodos([...todos, newTodo])
    }

    const deleteTodo = (id: number) => {
        const newTodos = todos.filter(todo => todo.id !== id)
        setTodos(newTodos)
    }

    const toggleTodo = (id: number) => {
        // 对给定id的todo的completed属性取反
        setTodos(todos.map(
            todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ))
    }

    const getFilteredTodos = () => {
        switch (filter) {
            case "all":
                return todos
            case "active":
                return todos.filter(todo => !todo.completed)
            case "completed":
                return todos.filter(todo => todo.completed)
            default:
                return todos
        }
    }
    // setFilter 给三个buttom 切换所有TodoItem的状态
    // addTodo 创建一个todo 加入现有的todos
    // TodoList 展示所有的符合给定状态的todos
    return (
        <div>
            <h1>TodoList</h1>
            <AddTodo addTodo={addTodo}></AddTodo>
            <TodoList todos={getFilteredTodos()} deleteTodo={deleteTodo} toggleTodo={toggleTodo}/>
            <TodoFilter setFilter={setFilter}></TodoFilter>
        </div>
    )
}
