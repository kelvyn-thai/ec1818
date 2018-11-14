import React from 'react';
import ReactLoading from 'react-loading';

const style = {
    position: 'absolute',
    width: '5%',
    height: '5%',
    zIndex: '15',
    top: '50%',
    left: '50%',
    margin: '-100px 0 0 -150px'
}

export default class BaseSpinner extends React.PureComponent {

    render() {
        return (
            <div>
                <ReactLoading style={style} type="spin" color="blue"/>
            </div>
        )
    }

}