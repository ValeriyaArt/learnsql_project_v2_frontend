import React from 'react';
import PropTypes from "prop-types";
import className from 'classnames';

import {SnackbarProvider} from 'notistack';

import {MuiThemeProvider} from '@material-ui/core/styles';
import withStyles from '@material-ui/core/styles/withStyles';

import UserService from '../service/user-service';

import Header from '../components/Header';
import Menu from '../components/Menu';
import AbsoluteLoader from '../components/AbsoluteLoader';
import Notificator from '../components/Notificator';

import theme from './themeMaterialUi';

import connect from './Layout.connect';
import styles from './Layout.styles';
import shallowEqual from "recompose/shallowEqual";

const userService = UserService.factory();

class Layout extends React.Component {
    state = {
        openMenu: false
    };

    componentShouldUpdate(nextProps, nextState){
        return !shallowEqual(this.props.errors, nextProps.errors)
            || this.props.fetching !== nextProps.fetching
            || !shallowEqual(this.props.children, nextProps.children)
        ;
    }

    componentDidMount() {
        if (this.props.groupOptions.length === 0){
            this.props.actions.getGroupOptions();
        }

        this.getUserData();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        //this.getUserData();
    }

    getUserData = () => {
        const isAuth = userService.isAuth();

        if (Object.keys(this.props.user).length === 0 && isAuth){
            this.props.actions.getUserData();
        }
    };

    handleOpenMenu = () => {
        this.setState({openMenu: true});
    };

    handleCloseMenu = () => {
        this.setState({openMenu: false});
    };

    render() {
        const {openMenu} = this.state;
        const {classes, fetching, errors, successMessages} = this.props;
        const isAuth = userService.isAuth();

        return (
            <SnackbarProvider maxSnack={3}>
                <MuiThemeProvider theme={theme}>
                    <AbsoluteLoader isFetching={fetching} />
                    <Notificator errors={errors} successMessages={successMessages} />
                    <Header handleOpenMenu={this.handleOpenMenu}
                            handleCloseMenu={this.handleCloseMenu}
                            openGeneralMenu={openMenu}
                            isAuth={isAuth}
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
