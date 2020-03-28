import React from 'react';
import PropTypes from "prop-types";
import withStyles from '@material-ui/core/styles/withStyles';

import Typography from "@material-ui/core/Typography";

import PasswordContainer from './PasswordContainer';
import ProfileInfoContainer from './ProfileInfoContainer';

import connect from './Profile.connect';
import styles from './Profile.styles';

class Profile extends React.PureComponent{
    state = {
        changePasswordMode: false
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