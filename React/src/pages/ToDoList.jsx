import React, { useEffect, useState } from 'react';
import ToDoItemTable from '../components/ToDoItemTable.jsx';
import { useNavigate } from 'react-router-dom';
export default function ToDoList() {

    const navigate = useNavigate();
    const [todos, setTodos] = useState([]);
    const [pendingTodos, setPendingTodos] = useState([]);
    const [completedTodos, setCompletedTodos] = useState([]);

    useEffect(() => {
        async function populateTodoItems() {
            const response = await fetch('api/todo');
            const data = await response.json();
            setTodos(data);
            setPendingTodos(data.filter(todo => !todo.completedDate));
            setCompletedTodos(data.filter(todo => todo.completedDate));
        }
        populateTodoItems();
    }, []);

    return (
        <div>
            <div>
                <button onClick={() => navigate("/create")} >Create new</button>
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
        await fetch('api/todo/' + todo.id, { method: 'DELETE' });

        let newTodos = todos.filter(todoItem => todoItem.id !== todo.id)
        setTodos(newTodos);

        setPendingTodos(newTodos.filter(todo => !todo.completedDate));
        setCompletedTodos(newTodos.filter(todo => todo.completedDate));
    }
}