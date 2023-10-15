import React, { useState } from 'react';
import ToDoItemTable from '../components/ToDoItemTable.jsx';

export default function ToDoList({ todoItems }) {

    const [todos, setTodos] = useState(todoItems);
    const [pendingTodos, setPendingTodos] = useState(todoItems.filter(todo => !todo.completedDate));
    const [completedTodos, setCompletedTodos] = useState(todoItems.filter(todo => todo.completedDate));

    return (
        <div>
            <div>
                <button>Create new</button>
            </div>
            <ToDoItemTable todoItems={pendingTodos} heading="To do" handleTodoItemCompleted={handleTodoItemCompleted} handleTodoItemDeleted={handleTodoItemDeleted} />
            <ToDoItemTable todoItems={completedTodos} heading="Completed" handleTodoItemCompleted={handleTodoItemCompleted} handleTodoItemDeleted={handleTodoItemDeleted} />
        </div>
    );

    async function handleTodoItemCompleted(todo) {
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(todo)
        };
        const response = await fetch('api/todo/' + todo.id, requestOptions);
        if (todo.completedDate) {
            todos.forEach(x => { if (x.id === todo.id) x.completedDate = null });
        } else {
            var date = await response.json();
            todos.forEach(x => { if (x.id === todo.id) x.completedDate = date });
        }
        
        setPendingTodos(todos.filter(todo => !todo.completedDate));
        setCompletedTodos(todos.filter(todo => todo.completedDate));
    }

    async function handleTodoItemDeleted(todo) {
        await fetch('api/todo/' + toDo.id, { method: 'DELETE' });

        setTodos(todos.filter(todoItem => todoItem.Id =! todo.id));

        setPendingTodos(todos.filter(todo => !todo.completedDate));
        setCompletedTodos(todos.filter(todo => todo.completedDate));
    }
}