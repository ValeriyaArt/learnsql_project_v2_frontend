import React from 'react';
import PropTypes from "prop-types";
import get from 'lodash/get';

import withStyles from '@material-ui/core/styles/withStyles';
import Typography from "@material-ui/core/Typography";

import PasswordContainer from './PasswordContainer';
import ProfileInfoContainer from './ProfileInfoContainer';

import connect from './Profile.connect';
import styles from './Profile.styles';
import * as Enum from "./enum";

class Profile extends React.PureComponent{
    state = {
        changePasswordMode: false
    };

    componentDidMount() {
        this.getUserData();
        this.getGroupOptions();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (Object.keys(prevProps.user).length === 0 && Object.keys(this.props.user).length > 0) {
            const {user} = this.props;

            this.props.actions.changeProfileField({destination: Enum.USERNAME_FIELD, value: get(user, ['attributes', Enum.USERNAME_FIELD], '')});
            this.props.actions.changeProfileField({destination: Enum.FIRST_NAME_FIELD, value: get(user, ['attributes', Enum.FIRST_NAME_FIELD], '')});
            this.props.actions.changeProfileField({destination: Enum.LAST_NAME_FIELD, value: get(user, ['attributes', Enum.LAST_NAME_FIELD], '')});
            this.props.actions.changeProfileField({destination: Enum.GROUP_FIELD, value: get(user, ['relationships', Enum.GROUP_FIELD, 'data', 'id'], '')});
        }
    }

    getUserData = () => {
        if (Object.keys(this.props.user).length === 0){
            this.props.actions.getUserData();
        }
    };

    getGroupOptions = () => {
        if (this.props.groupOptions.length === 0){
            this.props.actions.getGroupOptions();
        }
    };

    changePasswordClickHandler = () => {
        if (this.state.changePasswordMode){
            this.setChangePasswordModeFalse();
        } else {
            this.setChangePasswordModeTrue();
        }
    };

    setChangePasswordModeTrue = () => {
        this.setState({changePasswordMode: true});
    };

    setChangePasswordModeFalse = () => {
        this.setState({changePasswordMode: false});
    };

    passwordModeButton = (text) => {
        const {classes} = this.props;

        return (
            <Typography className={classes.changePassword} onClick={this.changePasswordClickHandler}>
                {text}
            </Typography>
        );
    };

    render() {
        const {classes} = this.props;
        const {changePasswordMode} = this.state;

        return(
            <div className={classes.root}>
                <div className={classes.form}>
                    {changePasswordMode ?
                        <>
                            {this.passwordModeButton('Назад')}
                            <PasswordContainer />
                        </>
                        :
                        <>
                            <ProfileInfoContainer />
                            {this.passwordModeButton('Изменить пароль')}
                        </>
                    }
                </div>
            </div>
        );
    }
}

Profile.propTypes = {
    classes: PropTypes.object,
    actions: PropTypes.object,
    disableButton: PropTypes.bool,
    groupOptions: PropTypes.array,
};

export default connect(withStyles(styles)(Profile));