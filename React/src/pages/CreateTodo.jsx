import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function TodoInput() {
    const [description, setDescription] = useState('');
    const navigate = useNavigate();

    return (
        <div >
            <div>
                <h2>Create new task</h2>
            </div>
            <div className="createGrid">
                <label>
                    Description:
                </label>
                <input autoFocus={true} type="text" value={description} onChange={e => setDescription(e.target.value)} />
                <button onClick={() => handleSave()}>
                    Submit
                </button>
                <button onClick={() => navigate("/")}>
                    Cancel
                </button>
            </div>
        </div>
    );

    async function handleSave() {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ Text: description })
        };
        await fetch('api/todo', requestOptions);
        navigate("/");
    }
}