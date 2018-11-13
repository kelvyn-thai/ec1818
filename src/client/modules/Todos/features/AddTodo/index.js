import React, { Component } from "react";
import withAddToDo from "./withAddToDo";


class AddToDo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: ''
        }
    }

    componentDidMount = () => {
        console.log(this.props)
    }

    handleAddTodo = () => {
        const { todo } = this.state;
        this.props.addTodo();
    }

    render() {
        return (
            <div className="form-group">
                <div className="row">
                    <label htmlFor="todo">Todo: </label>
                    <input type="text" onChange={(e) => this.setState({ todo: e.target.value })} />
                    <button onClick={this.handleAddTodo}> Add todo</button>
                </div>
            </div>
        )
    }
}


export default withAddToDo( AddToDo)