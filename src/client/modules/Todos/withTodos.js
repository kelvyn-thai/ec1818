import { mapProps, compose} from 'recompose';
import {connect} from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from './redux/redux-connect';

const propsMapper = mapProps((props) => {

    const { todos, requestFetchTodos} = props;

    return {
        todos: todos,
        fetchData:requestFetchTodos
    }
})

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    propsMapper
)