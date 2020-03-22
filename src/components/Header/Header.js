import React from 'react';
import PropTypes from "prop-types";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import withStyles from '@material-ui/core/styles/withStyles';

import UserService from "../../service/user-service";

import styles from './Header.styles';
import {appRouter} from "../../service/router-service";
import Link from "react-router-dom/Link";

const userService = UserService.factory();

class Header extends React.PureComponent{
    state = {
        anchorEl: null
    };

    handleMenu = event => {
        this.setState({anchorEl: event.currentTarget});
    };

    handleClose = () => {
        this.setState({anchorEl: null});
    };

    handleGeneralMenuButtonClick = () => {
        const {openGeneralMenu} = this.props;

        if (openGeneralMenu){
            this.props.handleCloseMenu();
        } else {
            this.props.handleOpenMenu();
        }
    };

    handleLogout = () => {
        userService.logout();
        this.handleClose();
    };

    render() {
        const {classes, openGeneralMenu, isAuth} = this.props;
        const {anchorEl} = this.state;
        const isOpenAvatarMenu = Boolean(anchorEl);

        return(
            <AppBar position="fixed" className={classes.header}>
                <Toolbar>
                    {isAuth &&
                        <IconButton edge="start"
                                    color="inherit"
                                    aria-label="menu"
                                    onClick={this.handleGeneralMenuButtonClick}>
                            {openGeneralMenu ? <CloseIcon /> : <MenuIcon />}
                        </IconButton>
                    }
                    <Typography variant="h6">
                        SQL Learn
                    </Typography>
                    {isAuth &&
                        <div className={classes.avatar}>
                            <IconButton
                                aria-haspopup="true"
                                onClick={this.handleMenu}
                                color="inherit"
                            >
                                <AccountCircle/>
                            </IconButton>
                            <Menu
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={isOpenAvatarMenu}
                                onClose={this.handleClose}
                                PopoverClasses={{
                                    root: classes.popper
                                }}
                            >
                                <MenuItem>
                                    <Link to={appRouter.getProfileRoute()}
                                          className={classes.link}
                                    > Профиль </Link>
                                </MenuItem>
                                <MenuItem onClick={this.handleLogout}>Выйти</MenuItem>
                            </Menu>
                        </div>
                    }
                </Toolbar>
            </AppBar>
        );
    }
}

Header.propTypes = {
    isAuth: PropTypes.bool,
};

export default withStyles(styles)(Header);