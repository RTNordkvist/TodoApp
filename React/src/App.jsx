import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ToDoList from './pages/ToDoList.jsx';
import CreateTodo from './pages/CreateTodo.jsx';

export default class App extends Component {
    static displayName = App.name;

    constructor(props) {
        super(props);
        this.state = { toDos: [], loading: true };
    }

    render() {
        return (
            <div>
                <h1 id="tabelLabel" >Jon's To Do</h1>
                <BrowserRouter>
                    <Routes>
                        <Route index element={<ToDoList />} />
                        <Route path="create" element={<CreateTodo />} />
                    </Routes>
                </BrowserRouter>
            </div>
        );
    }




    //async populateWeatherData() {
    //    console.log("fetching weatherforecast!");
    //    const response = await fetch('weatherforecast');
    //    const data = await response.json();
    //    this.setState({ forecasts: data, loading: false });
    //}
}
