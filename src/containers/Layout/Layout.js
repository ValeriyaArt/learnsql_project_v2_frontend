import React from 'react';
import PropTypes from "prop-types";
import Header from '../Header';

class Layout extends React.Component {
    render() {
        return (
            <>
                <Header />
                {this.props.children}
            </>
        );
    }
}

Layout.propTypes = {
    children: PropTypes.object
};


export default Layout;
