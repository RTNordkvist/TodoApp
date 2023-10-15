import React from 'react';
import ToDoItem from './ToDoItem.jsx';

export default function ToDoItemTable({ todoItems, heading, handleTodoItemCompleted, handleTodoItemDeleted }) {

    const [todos, setTodos] = todoItems;

    return (
        <div>
            <h2>{heading }</h2>
            <ul>
                {todoItems.map((todo, index) =>
                    <li key={index}>
                        <ToDoItem toDo={todo} onTodoItemCompleted={() => handleTodoItemCompleted(todo)} onTodoItemDeleted={() => handleTodoItemDeleted(todo)} />
                    </li>
                )}
            </ul>
        </div>
    );
}