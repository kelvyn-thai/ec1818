import {mapProps, compose } from 'recompose';
import { connect } from "react-redux";
import { mapDispathToProps } from "../redux/redux-connect";

const propsMapper = mapProps((props) => {
    const { addTodoRequrest  } = props;
    return {
        addTodo: addTodoRequrest
    }
})


export default compose(
    connect(null, mapDispathToProps),
    propsMapper
)