import React, { Component } from "react";

import Todos from "./Todos";
import Form from "./Form";

export default class App extends Component {
    state = {
        inputValue: "",
        todos: [],
        error: false,
        message: ""
    };
    handleAddBtn = () => {
        const { todos, inputValue } = this.state;
        if (inputValue) {
            const todoItems = [...todos, { item: this.state.inputValue }];
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
                                    onChange={this.handleInputChange}
                                    onClick={this.handleAddBtn}
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
