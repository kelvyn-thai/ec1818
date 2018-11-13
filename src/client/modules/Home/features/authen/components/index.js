import React from 'react';
import withAuthen from './withAuthen';




class Authen extends React.Component {

    handleLogin = () => {
        this.props.loginReq();
    }

    handleLogout = () => {
        this.props.logoutReq();
    }

    
    render() {
        return (
            <div>
                <button onClick={this.handleLogin}>Login</button>
                <button onClick={this.handleLogout}>Logout</button>
            </div>
        )
    }



}


export default withAuthen(Authen);