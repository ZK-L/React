import React from 'react'
import InputForm from './InputForm'
import TodoList from './TodoList'
import './Todo.css'

export default function Todo() {
    return (
        <div className='todoPage'>
            <div className='inputForm'>
                <InputForm />
            </div>
            <div className='todoList'>
                <TodoList />
            </div>
        </div>
    )
};
