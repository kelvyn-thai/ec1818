import React from 'react';

export default class BaseError extends React.Component {
    render() {
        return (
            <div>
                <h1>Something went wrong! Please try again later.</h1>
            </div>
        )
    }
}