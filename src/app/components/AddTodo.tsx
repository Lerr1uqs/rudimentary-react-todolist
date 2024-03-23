"use client";
import { Ruthie } from "next/font/google"
import { useState } from "react"

interface AddTodoProps {
    addTodo: (todo: string) => void
}

function AddTodo({addTodo}: AddTodoProps) {
    const [text, setText] = useState<string>('')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault() // 避免页面刷新
        if(text.trim() === '') {
            return
        }
        addTodo(text)// 调用父组件中传入的函数
        setText('')
    }
    
    // 只要输入框有变化，就更新text
    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={text} 
                onChange={(e) => setText(e.target.value)}
            />
            <button>new item</button>
        </form>
    )
}
export default AddTodo