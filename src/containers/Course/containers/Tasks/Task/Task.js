import React from 'react';
import PropTypes from "prop-types";
import get from 'lodash/get';

import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import withStyles from '@material-ui/core/styles/withStyles';

import connect from './Task.connect';
import styles from './Task.styles';

class Task extends React.PureComponent{
    constructor(props) {
        super();

        this.state = {
            answer: props.solution
        }
    }

    answerChangeHandler = (event) => {
        this.setState({answer: get(event, 'target.value')});
    };

    clearAnswerField = () => {
        this.setState({answer: ''});
    };

    answerButtonClickHandler = () => {
        this.props.actions.completeTask(this.state.answer);
    };

    renderAnswerField = () => {
        const {classes} = this.props;
        const {answer} = this.state;

        return (
            <Box display={'block'} className={classes.answerFieldContainer}>
                <TextField label={'Запрос'}
                           multiline
                           rowsMax={10}
                           rows={5}
                           variant={'outlined'}
                           fullWidth
                           maxWidth={500}
                           onChange={this.answerChangeHandler}
                           value={answer}
                />
                <Box display={'flex'}
                     justifyContent={'flex-end'}
                     className={classes.buttonsContainer}
                >
                    <Button onClick={this.clearAnswerField}> Очистить </Button>
                    <Button color={'primary'}
                            variant={'outlined'}
                            className={classes.button}
                            disabled={answer.length === 0}
                            onClick={this.answerButtonClickHandler}
                    >
                        Выполнить
                    </Button>
                </Box>
            </Box>
        );
    };

    render() {
        const {task, classes, error} = this.props;
        const taskText = get(task, `attributes.task_text`, '');
        const taskTitle = get(task, `attributes.title`, '');

        return (
            <div className={classes.taskRoot}>
                <div className={classes.task}>
                    <Typography> <b>{taskTitle}:</b> </Typography>
                    <Typography> {taskText} </Typography>

                    {this.renderAnswerField()}

                    {error &&
                        <Box className={classes.error}>
                            <Typography> {error} </Typography>
                        </Box>
                    }
                </div>
            </div>
        )
    }
}

Task.propTypes = {
    error: PropTypes.any,
    task: PropTypes.object,
    currentTask: PropTypes.string
};

export default withStyles(styles)(connect(Task));