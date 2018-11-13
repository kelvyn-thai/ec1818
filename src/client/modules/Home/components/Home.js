import React from 'react';
import { Link } from "react-router-dom";

export default   class Home extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello!</h1>
                <h2>We are EC1818</h2>
                <Link to="/todos">Go to todos</Link>
            </div>
        )
    }
}