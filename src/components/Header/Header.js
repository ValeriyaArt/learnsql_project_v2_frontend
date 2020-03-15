import React from 'react';

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

import styles from './Header.styles';

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

    render() {
        const {classes, openGeneralMenu} = this.props;
        const {anchorEl} = this.state;
        const isOpenAvatarMenu = Boolean(anchorEl);

        return(
            <AppBar position="fixed" className={classes.header}>
                <Toolbar>
                    <IconButton edge="start"
                                color="inherit"
                                aria-label="menu"
                                onClick={this.handleGeneralMenuButtonClick}>
                        {openGeneralMenu ? <CloseIcon /> : <MenuIcon />}
                    </IconButton>
                    <Typography variant="h6">
                        SQL Learn
                    </Typography>
                    <div className={classes.avatar}>
                        <IconButton
                            aria-haspopup="true"
                            onClick={this.handleMenu}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
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
                        >
                            <MenuItem onClick={this.handleClose}>Профиль</MenuItem>
                            <MenuItem onClick={this.handleClose}>Выйти</MenuItem>
                        </Menu>
                    </div>
                </Toolbar>
            </AppBar>
        );
    }
}

export default withStyles(styles)(Header);