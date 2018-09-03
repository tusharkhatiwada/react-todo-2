import React, { Component } from "react";

import TodoItem from "./TodoItem";

export default class Todos extends Component {
    renderTodoItems = () => {
        const { todos } = this.props;

        return todos.map((todo, i) => {
            return <TodoItem key={i} item={todo.item} />;
        });
    };
    render() {
        return <ul className="list-group">{this.renderTodoItems()}</ul>;
    }
}
