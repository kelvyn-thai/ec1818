import { mapProps, compose } from 'recompose';
import {connect} from 'react-redux';
import { mapDispatchToProps } from "../redux/redux-connect";


const propsMapper = mapProps((props) => {
    const { loginRequest, logoutRequest }  = props;
    return {
        loginReq: loginRequest,
        logoutReq: logoutRequest
    }
})

export default compose(
    connect(null, mapDispatchToProps),
    propsMapper
)