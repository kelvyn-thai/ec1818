import React from 'react';
import withTodos from './withTodos';
import AddToDo from './features/AddTodo';

class Todos extends React.Component {


    componentDidMount = () => {
        this.props.fetchData();
    }

    render() {
        return (
            <div>
                <AddToDo />
                <hr />
                <div className="form-group">
                    <h1>List Todos</h1>
                </div>
            </div>
        )
    }

}

export default withTodos(Todos);