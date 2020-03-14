import React from 'react';
import PropTypes from "prop-types";
import get from 'lodash/get';

import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import withStyles from '@material-ui/core/styles/withStyles';


import connect from './Tasks.connect';
import styles from './Tasks.styles';

class Tasks extends React.PureComponent{
    state = {
        currentTask: 0
    };

    changeTaskHandler = (id) => () => {
        this.setState({currentTask: id});
    };

    renderMenu = () => {
        const {tasks, classes} = this.props;
        const {currentTask} = this.state;

        return (
            <Paper>
                <MenuList className={classes.menu}>
                    {tasks.map((task, id) =>
                        <MenuItem onClick={this.changeTaskHandler(id)}
                                  key={`task-${id}`}
                                  selected={currentTask === id}
                        >
                            {get(task, 'attributes.title')}
                        </MenuItem>
                    )}
                </MenuList>
            </Paper>
        )
    };

    renderTask = () => {
        const {tasks, classes} = this.props;
        const {currentTask} = this.state;
        const taskText = get(tasks, `${currentTask}.attributes.task_text`, '');

        return (
            <Paper className={classes.taskRoot}>
                <Typography> <b>Задание:</b> </Typography>
                <Typography> {taskText} </Typography>

                {this.renderAnswerField()}
            </Paper>
        )
    };

    renderAnswerField = () => {
        const {classes} = this.props;

        return (
            <Box display={'block'} className={classes.answerFieldContainer}>
                <TextField label={'Запрос'}
                           multiline
                           rowsMax={10}
                           rows={5}
                           variant={'outlined'}
                           fullWidth
                           maxWidth={500}
                />
                <Box display={'flex'}
                     justifyContent={'flex-end'}
                     className={classes.buttonsContainer}
                >
                    <Button> Очистить </Button>
                    <Button color={'primary'}
                            variant={'outlined'}
                            className={classes.button}
                    >
                        Выполнить
                    </Button>
                </Box>
            </Box>
        );
    };

    render() {
        return(
            <Box display={'flex'}>
                {this.renderMenu()}
                {this.renderTask()}
            </Box>
        );
    }
}

Tasks.propTypes = {
    tasks: PropTypes.array
};

export default withStyles(styles)(connect(Tasks));