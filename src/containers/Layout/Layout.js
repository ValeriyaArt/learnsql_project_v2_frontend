import React from 'react';
import PropTypes from "prop-types";
import className from 'classnames';
import Box from "@material-ui/core/Box"
import withStyles from '@material-ui/core/styles/withStyles';

import Header from './components/Header';
import Menu from './components/Menu';

import styles from './Layout.styles';

class Layout extends React.Component {
    state = {
        openMenu: false
    };

    handleOpenMenu = () => {
        this.setState({openMenu: true});
    };

    handleCloseMenu = () => {
        this.setState({openMenu: false});
    };

    render() {
        const {openMenu} = this.state;
        const {classes} = this.props;

        return (
            <>
                <Header handleOpenMenu={this.handleOpenMenu}
                        handleCloseMenu={this.handleCloseMenu}
                        openGeneralMenu={openMenu}
                />
                <div className={classes.root}>
                    <Menu isOpen={openMenu} />
                    <div className={className(classes.content, {[classes.contentShift]: openMenu})}>
                        {this.props.children}
                    </div>
                </div>
            </>
        );
    }
}

Layout.propTypes = {
    children: PropTypes.object
};

export default withStyles(styles)(Layout);
