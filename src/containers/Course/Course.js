import React from 'react';
import get from 'lodash/get';
import {Redirect} from "react-router";
import {withRouter} from 'react-router-dom';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import withStyles from '@material-ui/core/styles/withStyles';
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";

import TasksTab from './containers/Tasks';
import MethodicalMaterialsTab from './containers/Methodical';
import StatisticsTab from './containers/Statistics';
import CourseFinishModal from './containers/CourseFinishModal';

import {appRouter} from "../../service/router-service";
import UserService from "../../service/user-service";

import connect from './Course.connect';
import styles from './Course.styles';

const userService = UserService.factory();

class Course extends React.PureComponent{
    state = {
        currentTab: 0,
    };

    componentDidMount() {
        this.props.actions.setCourseId(get(this, 'props.match.params.id', null));
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const courseId = get(this, 'props.match.params.id', null);
        const lastCourseId = get(prevProps, 'match.params.id', null);

        if (courseId !== lastCourseId){
            this.props.actions.setCourseId(courseId);
        }
    }

    changeTabHandler = (event, tabNumber) => {
        this.setState({currentTab: tabNumber});
    };

    renderTabMenu = () => {
        const {currentTab} = this.state;
        const {classes} = this.props;

        return (
            <div className={classes.tabMenu}>
                <Tabs value={currentTab}
                      onChange={this.changeTabHandler}
                >
                    <Tab label={'Статистика'} />
                    <Tab label={'Методические материалы'} />
                    <Tab label={'Задания'} />
                </Tabs>
            </div>
        );
    };

    renderTabContent = () => {
        const {currentTab} = this.state;

        switch (currentTab) {
            case 0:
                return <StatisticsTab />;
            case 1:
                return <MethodicalMaterialsTab />;
            case 2:
                return <TasksTab />;
            default:
                return <></>;
        }

    };

    render() {
        const {classes, auth} = this.props;
        const isAuth = userService.isAuth() && auth;

        if (!isAuth) return <Redirect to={appRouter.getSignInRoute()} />;

        return(
            <>
                {this.renderTabMenu()}
                <Box className={classes.courseTabContent}>
                    <Paper className={classes.paper}>
                        {this.renderTabContent()}
                    </Paper>
                </Box>

                <CourseFinishModal />
            </>
        );
    }
}

Course.propTypes = {

};

export default withStyles(styles)(connect(withRouter(Course)));