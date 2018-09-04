import React, { Component } from "react";

import Todos from "./Todos";

export default class Form extends Component {
    render() {
        const { onInputChange, onFormSubmit, value } = this.props;
        return (
            <div className="form mb-3">
                <form className="form-inline" onSubmit={onFormSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            value={value}
                            onChange={onInputChange}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Add Item
                    </button>
                </form>
            </div>
        );
    }
}
