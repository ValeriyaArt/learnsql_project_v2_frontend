import React from 'react';
import {Link} from 'react-router-dom';
import {Redirect} from "react-router";
import PropTypes from "prop-types";
import get from "lodash/get";

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography  from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import withStyles from '@material-ui/core/styles/withStyles';

import {appRouter} from '../../service/router-service';
import UserService from "../../service/user-service";

import * as Enum from './enum';

import connect from './SignUp.connect';
import styles from './SignUp.styles';

const userService = UserService.factory();

class SignUp extends React.PureComponent{
    state = {
        passwordFieldIsFocused: false
    };

    componentWillUnmount() {
        this.props.actions.signUpPageDown();
    }

    changeField = (destination) => (e) => {
        this.props.actions.signUpChangeField({destination, value: get(e, 'target.value', '')})
    };

    clickButtonHandler = () => {
        this.props.actions.signUp();
    };

    passwordFieldFocus = () => {
        this.setState({passwordFieldIsFocused: true});
    };

    passwordFieldBlur = () => {
        this.setState({passwordFieldIsFocused: false});
    };

    emailFieldFocus = () => {
        this.setState({emailFieldIsFocused: true});
    };

    emailFieldBlur = () => {
        this.setState({emailFieldIsFocused: false});
    };

    render() {
        const {classes, disableButton, groupOptions, isPasswordError, auth,
            username, firstName, lastName, password, passwordRepeat, email, isEmailError } = this.props;

        const {passwordFieldIsFocused, emailFieldIsFocused} = this.state;

        const showPasswordError = isPasswordError && !passwordFieldIsFocused;
        const showEmailError = isEmailError && !emailFieldIsFocused;

        const isAuth = userService.isAuth() && auth;

        if (isAuth) return <Redirect to={appRouter.getHomeRoute()} />;

        return(
            <div className={classes.root}>
                <div className={classes.form}>
                    <TextField label="Логин"
                               className={classes.textField}
                               onChange={this.changeField(Enum.USERNAME_FIELD)}
                               value={username}
                    />
                    <TextField label="Email"
                               className={classes.textField}
                               onChange={this.changeField(Enum.EMAIL_FIELD)}
                               value={email}
                               error={showEmailError}
                               onFocus={this.emailFieldFocus}
                               onBlur={this.emailFieldBlur}
                    />
                    <TextField label="Имя"
                               className={classes.textField}
                               onChange={this.changeField(Enum.FIRST_NAME_FIELD)}
                               value={firstName}
                    />
                    <TextField label="Фамилия"
                               className={classes.textField}
                               onChange={this.changeField(Enum.LAST_NAME_FIELD)}
                               value={lastName}
                    />
                    <TextField label="Пароль"
                               className={classes.textField}
                               onChange={this.changeField(Enum.PASSWORD_FIELD)}
                               type="password"
                               value={password}
                    />
                    <TextField label="Повторите пароль"
                               className={classes.textField}
                               onChange={this.changeField(Enum.PASSWORD_REPEAT_FIELD)}
                               type="password"
                               error={showPasswordError}
                               onFocus={this.passwordFieldFocus}
                               onBlur={this.passwordFieldBlur}
                               helperText={showPasswordError && 'Пароли не совпадают'}
                               value={passwordRepeat}
                    />

                    <FormControl>
                        <InputLabel id="group-selector-label">Номер группы</InputLabel>
                        <Select
                            labelId="group-selector-label"
                            onChange={this.changeField(Enum.GROUP_FIELD)}>
                            {groupOptions.map(group =>
                                <MenuItem value={group.id} key={`group-${group.id}`}>
                                    {get(group, 'title', '')}
                                </MenuItem>
                            )}
                        </Select>
                    </FormControl>

                    <Button color="primary"
                            variant="contained"
                            className={classes.button}
                            disabled={disableButton}
                            onClick={this.clickButtonHandler}
                    >
                        Зарегистрироваться
                    </Button>

                    <Typography className={classes.noAccount}>
                        Есть аккаунт?&nbsp;
                        <Link to={appRouter.getSignInRoute()}
                              className={classes.link}>
                            Войти
                        </Link>
                    </Typography>
                </div>
            </div>
        );
    }
}

SignUp.propTypes = {
    username: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    password: PropTypes.string,
    email: PropTypes.string,
    passwordRepeat: PropTypes.string,
    group: PropTypes.number,
    classes: PropTypes.object,
    actions: PropTypes.object,
    disableButton: PropTypes.bool,
    isPasswordError: PropTypes.bool,
    isEmailError: PropTypes.bool,
    auth: PropTypes.bool,
    groupOptions: PropTypes.array,
};

export default connect(withStyles(styles)(SignUp));