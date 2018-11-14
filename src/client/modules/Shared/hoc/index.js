import React from 'react';
import BaseSpinner from '../components/BaseSpinner';
import BaseError from '../components/BaseError';

export const higherOrderComponent = (WrappedComponent) => {
    return class extends React.Component {

        constructor(props) {
            super(props);
        }
        componentDidMount = () => {
            this.props.fetchData();
        }
        render() {
            const { isFetching, isFetched, isError, data } = this.props;
            if (isFetched && isFetching) {//loadmore
                console.log('loadmore data...')
            }
            else if (isFetched && !isFetching) {//fetched data
                return <WrappedComponent data={data} />
            }
            else if (!isFetched && isFetching) {//fetching data
                return <BaseSpinner />
            }
            else if (isError) {//error
                return <BaseError />
            }
            return null;
        }
    }
}