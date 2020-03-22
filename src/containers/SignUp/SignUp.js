import React from 'react';
import Link from 'react-router-dom/Link';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography  from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

import connect from './SignUp.connect';
import styles from './SignUp.styles';
import PropTypes from "prop-types";

class SignUp extends React.PureComponent{
    componentDidMount() {
        if (this.props.groupOptions.length === 0){
            this.props.actions.getGroupOptions();
        }
    }

    render() {
        const {classes, disableButton, groupOptions} = this.props;

        return(
            <div className={classes.root}>
                <div className={classes.form}>
                    <TextField label="Логин"
                               className={classes.textField}
                    />
                    <TextField label="Имя"
                               className={classes.textField}
                    />
                    <TextField label="Фамилия"
                               className={classes.textField}
                    />
                    <TextField label="Пароль"
                               className={classes.textField}
                               type="password"
                    />
                    <TextField label="Повторите пароль"
                               className={classes.textField}
                               type="password"
                    />
                    <Button color="primary"
                            variant="contained"
                            className={classes.button}
                            disabled={disableButton}
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