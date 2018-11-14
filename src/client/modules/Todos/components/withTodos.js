import { mapProps, compose} from 'recompose';
import {connect} from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../redux/redux-connect';

const propsMapper = mapProps((props) => {
    const { todos, requestFetchTodos} = props;
    const fetchData = () => {
        const data = {
            projection: '_id'
        }
        return requestFetchTodos();
    }
    return {
        isFetching: todos.isFetching,
        isFetched: todos.isFetched,
        error: todos.error,
        data: todos.data,
        fetchData: fetchData
    }
});


export default compose (
    connect(mapStateToProps, mapDispatchToProps),
    propsMapper
)