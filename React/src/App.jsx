import React, { Component } from 'react';
import ToDoList from './pages/ToDoList.jsx';

export default class App extends Component {
    static displayName = App.name;

    constructor(props) {
        super(props);
        this.state = { toDos: [], loading: true };
    }

    componentDidMount() {
        this.populateTodoItems();
    }

    static renderTodoPage(todoItems) {
        return (<ToDoList todoItems={todoItems} />)
    }

    render() {
        let contents = this.state.loading
            ? <p>Loading...</p>
            : App.renderTodoPage(this.state.toDos);

        return (
            <div>
                <h1 id="tabelLabel" >Rikke's To Do</h1>
                {contents}
            </div>
        );
    }

    async populateTodoItems() {
        // todo fetch todo items, set state
        //this.setState({ toDos: [{ text: "Item1", completedDate: null }, { text: "Item2", completedDate: "2023-10-14 13:23:11Z" }], loading: false });

        const response = await fetch('api/todo');
        const data = await response.json();
        this.setState({ toDos: data, loading: false })
    }


    //async populateWeatherData() {
    //    console.log("fetching weatherforecast!");
    //    const response = await fetch('weatherforecast');
    //    const data = await response.json();
    //    this.setState({ forecasts: data, loading: false });
    //}
}
