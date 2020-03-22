import React from 'react';
import Link from 'react-router-dom/Link';
import PropTypes from "prop-types";
import get from "lodash/get";

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography  from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

import * as Enum from './enum';

import connect from './SignUp.connect';
import styles from './SignUp.styles';

class SignUp extends React.PureComponent{
    componentDidMount() {
        if (this.props.groupOptions.length === 0){
            this.props.actions.getGroupOptions();
        }
    }

    changeField = (destination) => (e) => {
        this.props.actions.signUpChangeField({destination, value: get(e, 'target.value', '')})
    };

    clickButtonHandler = () => {
        this.props.actions.signUp();
    };

    render() {
        const {classes, disableButton, groupOptions} = this.props;

        return(
            <div className={classes.root}>
                <div className={classes.form}>
                    <TextField label="Логин"
                               className={classes.textField}
                               onChange={this.changeField(Enum.USERNAME_FIELD)}
                    />
                    <TextField label="Имя"
                               className={classes.textField}
                               onChange={this.changeField(Enum.FIRST_NAME_FIELD)}
                    />
                    <TextField label="Фамилия"
                               className={classes.textField}
                               onChange={this.changeField(Enum.LAST_NAME_FIELD)}
                    />
                    <TextField label="Пароль"
                               className={classes.textField}
                               onChange={this.changeField(Enum.PASSWORD_FIELD)}
                               type="password"
                    />
                    <TextField label="Повторите пароль"
                               className={classes.textField}
                               onChange={this.changeField(Enum.PASSWORD_REPEAT_FIELD)}
                               type="password"
                    />
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
                        <Link to={'sign-in'}
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
    classes: PropTypes.object,
    actions: PropTypes.object,
    disableButton: PropTypes.bool,
    groupOptions: PropTypes.array,
};

export default connect(withStyles(styles)(SignUp));