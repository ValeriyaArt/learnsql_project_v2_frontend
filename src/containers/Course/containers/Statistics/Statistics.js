import React from 'react';
import PropTypes from "prop-types";
import get from 'lodash/get';

import { HorizontalBar } from 'react-chartjs-2';

import Box from '@material-ui/core/Box';
import Typography from "@material-ui/core/Typography";
import withStyles from '@material-ui/core/styles/withStyles';

import connect from './Statistics.connect';
import styles from './Statistics.styles';

class Statistics extends React.PureComponent{
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.courseId !== prevProps.courseId){
            this.props.actions.getCourseStatistics();
        }
    }

    getMappedDataWithLabels = () => {
        const {statistics} = this.props;
        const leader_board = get(statistics, 'lider_board', []);

        const usersWithCompletedTasks = leader_board.filter(person => person.all_tasks > 0);

        return {
            data: usersWithCompletedTasks.map(user => user.completed_tasks),
            labels: usersWithCompletedTasks.map(user => user.fio),
        };
    }

    getUsersWhoHaveNotStartedCourse = () => {
        const {statistics} = this.props;
        const leader_board = get(statistics, 'lider_board', []);

        return leader_board.filter(person => person.all_tasks === 0);
    }

    render() {
        const {classes} = this.props;
        const mappedDataWithLabels = this.getMappedDataWithLabels();
        const usersWhoHaveNotStartedCourse = this.getUsersWhoHaveNotStartedCourse();

        const data = {
            labels: mappedDataWithLabels.labels,
            datasets: [
                {
                    label: 'Выполненные задания',
                    backgroundColor: 'rgba(29,81,163,0.2)',
                    borderColor: 'rgba(29,81,163,0.2)',
                    borderWidth: 1,
                    hoverBackgroundColor: 'rgba(29,81,163,0.4)',
                    hoverBorderColor: 'rgba(29,81,163,0.4)',
                    data: mappedDataWithLabels.data
                }
            ],
        };

        const options = {
            scales: {
                xAxes: [{
                    ticks: {
                        stepSize: 1,
                        unit: 1
                    },
                }]
            }
        };

        return(
            <Box className={classes.root}>
                <div className={classes.graph}>
                    <HorizontalBar
                        data={data}
                        options={options}
                    />
                </div>
                <div className={classes.usersList}>
                    <Typography className={classes.title}> Не начали курс </Typography>

                    {usersWhoHaveNotStartedCourse.map((user, index) =>
                        <Typography key={`user-${index}`}> {user.fio} </Typography>
                    )}
                </div>
            </Box>
        );
    }
}

Statistics.propTypes = {
    actions: PropTypes.object,
    statistics: PropTypes.object,
};

export default withStyles(styles)(connect(Statistics));