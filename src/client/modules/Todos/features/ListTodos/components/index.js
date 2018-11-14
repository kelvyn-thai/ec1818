import React from 'react';
import TodoItem from '../../TodoItem/components';
import withListTodos from './withListTodos';

function RenderTodos(props) {
    const { todos, remove, changeStatus } = props;
    return (
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Note</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {todos.length > 0 &&
                    todos.map(todo => <TodoItem
                        key={todo._id}
                        todo={todo}
                        removeTodo={remove}
                        changeStatusTodo={changeStatus}
                    />)
                }
            </tbody>
        </table>


    )
}

class ListTodos extends React.PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="form-group">
                <h1>List Todos</h1>
                <RenderTodos {...this.props} />
            </div>

        )
    }
}


export default withListTodos(ListTodos)