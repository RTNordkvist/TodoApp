import React from 'react';

export default function ToDoItem({ toDo, onTodoItemCompleted, onTodoItemDeleted }) {

    return (
        <div>
            <input key={toDo.id} type="checkbox" onClick={onTodoItemCompleted} defaultChecked={toDo.completedDate} />
            <div>{toDo.text}</div>
            <div>
                {(toDo.completedDate) &&
                    <span>
                        {new Date(toDo.completedDate).toDateString()}
                    </span>
                }
            </div>
            <input type="button" className="btn-sm btn-danger" onClick={onTodoItemDeleted} value="Delete" />
        </div>
    );
}