import React from 'react';
import PropTypes from "prop-types";

import Box from '@material-ui/core/Box';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import DoneIcon from '@material-ui/icons/Done';
import withStyles from '@material-ui/core/styles/withStyles';

import Task from './containers/Task';

import {getTaskId} from "../../getters";

import connect from './Tasks.connect';
import styles from './Tasks.styles';

class Tasks extends React.PureComponent{
    state = {
        currentTask: null
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.courseId !== prevProps.courseId){
            this.props.actions.getCourseTasks();
        }
    }

    componentDidMount() {
        this.props.actions.getCourseTasks();
    }

    changeTaskHandler = (routeId, id) => () => {
        this.props.actions.setCurrentRouteId(routeId);
        this.props.actions.getCourseTask(id);
    };

    renderMenu = () => {
        const {tasks, classes} = this.props;
        const {currentTask} = this.state;

        return (
            <MenuList className={classes.menu}>
                {tasks.map((route, index) =>
                    <MenuItem
                        onClick={this.changeTaskHandler(route.id, getTaskId(route))}
                        key={`task-${index}`}
                        selected={currentTask === getTaskId(route)}
                    >
                        Задание {index + 1}
                        {route.status === 1 && <DoneIcon className={classes.doneIcon}/>}
                    </MenuItem>
                )}
            </MenuList>
        )
    };

    render() {
        const {classes, isFetchingGet} = this.props;

        return(
            <Box display={'flex'} className={classes.root}>
                {this.renderMenu()}
                {!isFetchingGet && <Task />}
            </Box>
        );
    }
}

Tasks.propTypes = {
    tasks: PropTypes.array,
    courseId: PropTypes.string,
    isFetchingGet: PropTypes.bool
};

export default withStyles(styles)(connect(Tasks));