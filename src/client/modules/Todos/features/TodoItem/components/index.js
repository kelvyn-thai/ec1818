import React from 'react';


class TodoItem extends React.PureComponent {


    handleChangStatusTodo = () => {
        const { todo } = this.props;
        const payload = {
            _id: todo._id,
            isCompleted: !todo.isCompleted
        }
        this.props.changeStatusTodo(payload)
    }

    handleRemoveTodo = (e) => {
        const { todo } = this.props;
        const payload = {
            _id: todo._id
        }
        this.props.removeTodo(payload);
    }

    render() {
        const { todo } = this.props;
        return (
            <tr>
                <td>{todo.title}</td>
                <td></td>
                <td><input type="checkbox" name="isCompleted" checked={todo.isCompleted} onChange={this.handleChangStatusTodo} /></td>
                <td><button onClick={this.handleRemoveTodo}>Remove</button></td>
            </tr>
        )
    }
}


export default TodoItem;