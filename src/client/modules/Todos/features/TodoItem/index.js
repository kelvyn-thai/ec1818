import React from 'react';


class TodoItem extends React.PureComponent {

    componentDidMount = () => {
            console.log(this.props);
    }

    render() {
        return (
            <div>
                <label htmlFor="name"></label>
            </div>
        )
    }
}


export default TodoItem;