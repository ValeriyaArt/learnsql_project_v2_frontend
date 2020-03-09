import React from 'react';
import Link from 'react-router-dom/Link';
import PropTypes from "prop-types";
import get from 'lodash/get';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography  from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

import * as Enum from './enum';

import connect from './SignIn.connect';
import styles from './SignIn.styles';

class SignIn extends React.PureComponent{
    changeLogin = (e) => {
        this.props.actions.signInChangeField({destination: Enum.LOGIN_FIELD, value: get(e, 'target.value', '')})
    };

    changePassword = (e) => {
        this.props.actions.signInChangeField({destination: Enum.PASSWORD_FIELD, value: get(e, 'target.value', '')})
    };

    clickButtonHandler = () => {
        this.props.actions.signIn();
    };

    render() {
        const {classes, disableButton} = this.props;

        return(
            <div className={classes.root}>
                <div className={classes.form}>
                    <TextField label="Логин"
                               className={classes.textField}
                               onChange={this.changeLogin}
                    />
                    <TextField label="Пароль"
                               className={classes.textField}
                               type="password"
                               onChange={this.changePassword}
                    />
                    <Button color="primary"
                            variant="contained"
                            className={classes.button}
                            disabled={disableButton}
                    >
                        Войти
                    </Button>

                    <Typography className={classes.noAccount}>
                        Нет аккаунта?&nbsp;
                        <Link to={'sign-up'}
                              className={classes.link}>
                            Регистрация
                        </Link>
                    </Typography>
                </div>
            </div>
        );
    }
}

SignIn.propTypes = {
    classes: PropTypes.object,
    actions: PropTypes.object,
    disableButton: PropTypes.bool,
};

export default withStyles(styles)(connect(SignIn));