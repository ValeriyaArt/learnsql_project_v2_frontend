import React from 'react';
import PropTypes from "prop-types";

class RootHomePage extends React.Component {
    render() {
        return this.props.children;
    }
}

RootHomePage.propTypes = {
    children: PropTypes.object
};


export default RootHomePage;
