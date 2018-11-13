import { mapProps, compose} from 'recompose';
import {connect} from 'react-redux';
import { mapStateToProps } from '../redux/redux-connect';

const propsMapper = mapProps((props) => {

    const { todos } = props;

    return {
        todos: todos
    }
})

export default compose(
    connect(null, mapStateToProps),
    propsMapper
)