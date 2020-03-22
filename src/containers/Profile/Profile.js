import React from 'react';
import Link from 'react-router-dom/Link';
import PropTypes from "prop-types";
import get from "lodash/get";

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography  from '@material-ui/core/Typography';
import Paper from "@material-ui/core/Paper";
import withStyles from '@material-ui/core/styles/withStyles';

import * as Enum from './enum';

import connect from './Profile.connect';
import styles from './Profile.styles';

class Profile extends React.PureComponent{
    componentDidMount() {
        if (this.props.groupOptions.length === 0){
            this.props.actions.getGroupOptions();
        }
    }

    changeField = (destination) => (e) => {
        this.props.actions.profileChangeField({destination, value: get(e, 'target.value', '')})
    };

    clickButtonHandler = () => {
        this.props.actions.signUp();
    };

    render() {
        const {classes, username, firstName, lastName} = this.props;

        return(
            <Paper>
                <TextField label="Логин"
                           className={classes.textField}
                           onChange={this.changeField(Enum.USERNAME_FIELD)}
                           value={username}
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
            </Paper>
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