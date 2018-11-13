import React from 'react';
import withTodos from './withTodos';

class Todos extends React.Component {


    constructor(props){
        super(props);
        this.state = {
            todo: ''
        }
    }

    componentDidMount = () => {
      console.log(this.props)
    }
    

    hanldeAddTodo =  () => {
        const { todo } = this.state;    

        console.log('add to do to db...', todo)

    }
    
    render() {
        return (
            <div>
                <div className="form-group">
                    <label htmlFor="todo">Todo: </label>
                    <input type="text" onChange={(e) => this.setState({todo: e.target.value})}/>
                </div>
                <button onClick={this.hanldeAddTodo}> Add todo</button>
            </div>
        )
    }

}

export default withTodos(Todos);