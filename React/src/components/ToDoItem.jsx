import React from 'react';

export default function ToDoItem({ toDo }) {

    return (
        <div>
            <input type="checkbox" onClick={completeTodoItem} defaultChecked={toDo.completedDate} />
            <div>{toDo.text}</div>
            {(toDo.completedDate != null) &&
                <div>
                    {toDo.completedDate.split('T')[0]}
                </div>
            }
            <input type="button" onClick={deleteTodoItem} value="Delete" />
        </div>
    );

    async function completeTodoItem() {
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(toDo)
        };
        await fetch('api/todo/' + toDo.id, requestOptions);
    }

    async function deleteTodoItem() {
        await fetch('api/todo/' + toDo.id, { method: 'DELETE' });
    }
}