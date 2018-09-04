import React, { Component } from "react";

export default class TodoItem extends Component {
    render() {
        console.log("Item: ", this.props.item);
        return (
            <li
                className="list-group-item"
                style={{ textDecoration: this.props.isCompleted ? "line-through" : "none" }}
            >
                {this.props.item}
                <input
                    type="checkbox"
                    className="float-right"
                    onChange={this.props.onMarkComplete}
                />
            </li>
        );
    }
}
