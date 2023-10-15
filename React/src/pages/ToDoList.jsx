import React from 'react';
import ToDoItemTable from '../components/ToDoItemTable.jsx';

export default function ToDoList({ todoItems }) {

    const [pendingTodos, setPendingTodos] = todoItems.filter(todo => !todo.completedDate);

    const [completedTodos, setCompletedTodos] = todoItems.filter(todo => todo.completedDate);

    return (
        <div>
            <div>
            <button>Create new</button>
            </div>
            <ToDoItemTable todoItems={pendingTodos} heading="To do" />
            <ToDoItemTable todoItems={completedTodos} heading="Completed" />
        </div>
    );
}