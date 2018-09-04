import React, { Component } from "react";

import Todos from "./Todos";
import Form from "./Form";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: "",
            todos: [],
            error: false,
            message: ""
        };
        // this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleAddBtn = e => {
        e.preventDefault();
        const { todos, inputValue } = this.state;
        const id = Math.floor(Math.random() * 1000 + 1);
        if (inputValue) {
            const todoItems = [
                ...todos,
                { id: id, item: this.state.inputValue, isCompleted: false }
            ];
            this.setState({
                todos: todoItems,
                inputValue: ""
            });
        } else {
            this.setState({
                error: true,
                message: "Item is required"
            });
        }
    };
    handleInputChange = event => {
        this.setState({
            inputValue: event.target.value,
            error: false,
            message: ""
        });
    };
    handleSecondButton = () => {
        alert("Second Button Clicked");
    };
    render() {
        const { inputValue, error, message, todos } = this.state;
        return (
            <div
                className="container d-flex justify-content-center align-items-center"
                style={{ marginTop: "12rem" }}
            >
                <div className="row">
                    <div className="col-12">
                        <div className="card" style={{ width: "22rem" }}>
                            <h2 className="card-header">Todo App</h2>
                            <div className="card-body">
                                <Form
                                    value={inputValue}
                                    onInputChange={this.handleInputChange}
                                    onFormSubmit={this.handleAddBtn}
                                    onSecondButtonClick={this.handleSecondButton}
                                />
                                {error && <div className="alert alert-danger">{message}</div>}
                                <Todos todos={todos} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
