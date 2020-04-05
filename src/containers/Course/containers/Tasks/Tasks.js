import React from 'react';
import PropTypes from "prop-types";

import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import withStyles from '@material-ui/core/styles/withStyles';

import Task from './containers/Task';

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

    changeTaskHandler = (id) => () => {
        this.props.actions.getCourseTask(id);
    };

    renderMenu = () => {
        const {tasks, classes} = this.props;
        const {currentTask} = this.state;

        return (
            <Paper>
                <MenuList className={classes.menu}>
                    {tasks.map((task, id) =>
                        <MenuItem onClick={this.changeTaskHandler(task.id)}
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
    tasks: PropTypes.array,
    courseId: PropTypes.string
};

export default withStyles(styles)(connect(Tasks));