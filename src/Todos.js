import React, { Component } from "react";

import TodoItem from "./TodoItem";

export default class Todos extends Component {
    state = {
        todos: []
    };
    componentDidUpdate(prevProps) {
        if (this.props.todos !== prevProps.todos) {
            this.setState({
                todos: this.props.todos
            });
        }
    }
    handleMark = (id, status) => {
        const { todos } = this.props;
        const newTodo = todos.map(todo => {
            if (todo.id === id) {
                todo.isCompleted = !status;
            }
            return todo;
        });
        this.setState({
            todos: newTodo
        });
    };
    renderTodoItems = () => {
        const { todos } = this.state;
        // console.log("Todos: ", todos);

        if (todos) {
            return todos.map((todo, i) => {
                return (
                    <TodoItem
                        key={todo.id}
                        item={todo.item}
                        id={todo.id}
                        isCompleted={todo.isCompleted}
                        onMarkComplete={() => this.handleMark(todo.id, todo.isCompleted)}
                    />
                );
            });
        }
    };
    render() {
        return <ul className="list-group">{this.renderTodoItems()}</ul>;
    }
}
