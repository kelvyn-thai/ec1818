import { mapProps, compose } from 'recompose';
import { connect } from 'react-redux';
import { mapDispatchToProps } from "../redux/redux-connect";

const propsMapper = mapProps((props) => {
    const { requestChangeStatusTodo, requestRemoveTodo, todos} = props;
    return {
        changeStatus: requestChangeStatusTodo,
        remove: requestRemoveTodo,
        todos: todos
    }
})


export default compose(
    connect(null, mapDispatchToProps),
    propsMapper
)