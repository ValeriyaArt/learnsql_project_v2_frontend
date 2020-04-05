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

import Task from './containers/Task';

import connect from './Tasks.connect';
import styles from './Tasks.styles';

class Tasks extends React.PureComponent{
    state = {
        currentTask: 0
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.currentTask !== prevState.currentTask){
            this.props.actions.getCourseTasks(this.state.currentTask);
        }
    }

    componentDidMount() {
        this.props.actions.getCourseTasks();
    }

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
                            Задание {id + 1}
                        </MenuItem>
                    )}
                </MenuList>
            </Paper>
        )
    };

    render() {
        return(
            <>
                {this.renderMenu()}
                <Task />
            </>
        );
    }
}

Tasks.propTypes = {
    tasks: PropTypes.array
};

export default withStyles(styles)(connect(Tasks));