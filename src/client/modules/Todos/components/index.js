import React from 'react';
import withTodos from './withTodos';
import AddToDo from "../features/AddTodo/components";
import { higherOrderComponent } from '../../Shared/hoc';
import ListTodos from '../features/ListTodos/components';


class Todos extends React.Component {

    render() {
        const { data } = this.props;
        const {payload} = data;
        return (
            <div>
                <AddToDo />
                <hr />
               <ListTodos  todos={payload}/>
            </div>
        )
    }

}

export default withTodos(higherOrderComponent(Todos));