import React from 'react';
import PropTypes from "prop-types";
import get from 'lodash/get';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import withStyles from '@material-ui/core/styles/withStyles';

import * as Enum from '../../../enum';

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
        const splittedAnswer = answer.split(' ');
        const firstWordError = splittedAnswer[0].toLocaleLowerCase() !== 'select'
            && splittedAnswer[0].toLocaleLowerCase() !== 'update'
            && splittedAnswer[0].toLocaleLowerCase() !== 'delete';

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
                           defaultValue={answer}
                />
                <Box display={'flex'}
                     justifyContent={'flex-end'}
                     className={classes.buttonsContainer}
                >
                    <Button onClick={this.clearAnswerField}> Очистить </Button>
                    <Button color={'primary'}
                            variant={'outlined'}
                            className={classes.button}
                            disabled={answer.length === 0 || firstWordError}
                            onClick={this.answerButtonClickHandler}
                    >
                        Выполнить
                    </Button>
                </Box>
            </Box>
        );
    };

    renderErrorTables = () => {
        const {classes, tableErrorData} = this.props;
        const refResult = get(tableErrorData, [Enum.ERROR_REF_RESULT, 1, 1], []);
        const studentResult = get(tableErrorData, [Enum.ERROR_STUDENT_RESULT, 1, 1], []);

        return (
            <Box className={classes.error}>
                <Typography> Неверно! </Typography>
                <Typography> Результаты выполнения запросов </Typography>

                <div className={classes.tableErrors}>
                    <div className={classes.table}>
                        <Typography> Правильный запрос </Typography>
                        <Table>
                            {refResult.map(row =>
                                <TableRow>
                                    {row.map(cell =>
                                        <TableCell>
                                            {cell}
                                        </TableCell>
                                    )}
                                </TableRow>
                            )}
                        </Table>
                    </div>

                    <div className={classes.table}>
                        <Typography> Ваш запрос </Typography>
                        <Table>
                            {studentResult.map(row =>
                                <TableRow>
                                    {row.map(cell =>
                                        <TableCell>
                                            {cell}
                                        </TableCell>
                                    )}
                                </TableRow>
                            )}
                        </Table>
                    </div>
                </div>
            </Box>
        );
    }

    render() {
        const {task, classes, error, tableErrorData} = this.props;
        const taskText = get(task, `attributes.task_text`, null);
        const taskDescription = get(task, `attributes.database_description`, '');
        const taskImage = get(task, `attributes.database_image`, '');
        const taskTitle = get(task, `attributes.title`, '');
        const refResult = get(tableErrorData, [Enum.ERROR_REF_RESULT, 1, 1], []);
        const studentResult = get(tableErrorData, [Enum.ERROR_STUDENT_RESULT, 1, 1], []);

        if (!taskText) return <></>;

        return (
            <div className={classes.taskRoot}>
                <div className={classes.task}>
                    <Typography> <b>{taskTitle}:</b> </Typography>
                    <Typography> {taskText} </Typography>
                    <Typography className={classes.taskDescription}> {taskDescription} </Typography>
                    <div className={classes.image}> <img src={taskImage} alt=""/> </div>

                    {this.renderAnswerField()}
                </div>
                <>
                    {error &&
                        <Box className={classes.error}>
                            <Typography> {error} </Typography>
                        </Box>
                    }

                    {refResult.length > 0 && studentResult.length > 0 && this.renderErrorTables()}
                </>
            </div>
        )
    }
}

Task.propTypes = {
    error: PropTypes.any,
    task: PropTypes.object,
    actions: PropTypes.object,
    tableErrorData: PropTypes.object,
    currentTask: PropTypes.string
};

export default withStyles(styles)(connect(Task));