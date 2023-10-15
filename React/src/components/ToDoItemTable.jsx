import React from 'react';
import ToDoItem from './ToDoItem.jsx';

export default function ToDoItemTable({ todoItems, heading }) {

    return (
        <div>
            <h2>{heading }</h2>
            <ul>
                {todoItems.map((todo, index) =>
                    <li key={index}>
                        <ToDoItem toDo={todo} />
                    </li>
                )}
            </ul>
        </div>
    );
}