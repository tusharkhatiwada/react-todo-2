import React, { Component } from "react";

import Todos from "./Todos";

export default class Form extends Component {
    render() {
        const { ...props } = this.props;
        return (
            <div className="form mb-3">
                <form className="form-inline" {...props}>
                    <div className="form-group">
                        <input type="text" className="form-control" />
                    </div>
                    <button type="button" className="btn btn-primary">
                        Add Item
                    </button>
                </form>
            </div>
        );
    }
}
