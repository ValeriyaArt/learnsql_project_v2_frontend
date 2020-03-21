import React from 'react';
import PropTypes from "prop-types";
import className from 'classnames';

import {SnackbarProvider} from 'notistack';

import {MuiThemeProvider} from '@material-ui/core/styles';
import withStyles from '@material-ui/core/styles/withStyles';

import Header from '../components/Header';
import Menu from '../components/Menu';
import AbsoluteLoader from '../components/AbsoluteLoader';
import Notificator from '../components/Notificator';

import theme from './themeMaterialUi';

import connect from './Layout.connect';
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
        const {classes, fetching, errors} = this.props;

        return (
            <SnackbarProvider maxSnack={3}>
                <MuiThemeProvider theme={theme}>
                    <AbsoluteLoader isFetching={fetching} />
                    <Notificator errors={errors} />
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
                </MuiThemeProvider>
            </SnackbarProvider>
        );
    }
}

Layout.propTypes = {
    children: PropTypes.any,
    errors: PropTypes.array,
    fetching: PropTypes.bool
};

export default connect(withStyles(styles)(Layout));
