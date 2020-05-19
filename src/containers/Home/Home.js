import React from 'react';
import PropTypes from "prop-types";
import get from 'lodash/get';
import {Redirect} from "react-router";
import {Link} from "react-router-dom";

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
// import DateRangeIcon from '@material-ui/icons/DateRange';

import {appRouter} from "../../service/router-service";
import UserService from "../../service/user-service";

import connect from './Home.connect';
import styles from './Home.styles';
// import moment from "moment";

const userService = UserService.factory();

class Home extends React.PureComponent{
    componentDidMount() {
        this.props.actions.getCourses();
        this.props.actions.getMyCourses();
    }

    joinCourse = (courseId) => () => {
        this.props.actions.joinCourse(courseId);
    };

    render() {
        const {classes, auth, courses, myCourses} = this.props;
        const isAuth = userService.isAuth() && auth;

        if (!isAuth) return <Redirect to={appRouter.getSignInRoute()} />;

        return(
            <div className={classes.root}>
                {courses.map(course => {
                    const isMyCourse = myCourses.find(myCourse => myCourse.course === course.id);

                    return (
                        <Card className={classes.card} key={`course-${course.id}`}>
                            <CardContent>
                                <Typography className={classes.title}>
                                    {get(course, 'title', '')}
                                </Typography>
                                <Typography className={classes.description}
                                            color="textSecondary"
                                            dangerouslySetInnerHTML={{__html: get(course, 'description', '')}}
                                />
                            </CardContent>
                            <CardActions className={classes.actions}>
                                <Typography className={classes.dates}>
                                    {/*<div className={classes.date}>*/}
                                    {/*    <DateRangeIcon color="primary"/> Старт:&nbsp;*/}
                                    {/*    <span className={classes.startDate}>{isMyCourse && moment(isMyCourse.date_start).format('DD.MM.YYYY')}</span>*/}
                                    {/*</div>*/}
                                    {/*<div className={classes.date}>*/}
                                    {/*    <DateRangeIcon color="primary"/> Финиш:&nbsp;*/}
                                    {/*    <span className={classes.startDate}>{isMyCourse && moment(isMyCourse.date_end).format('DD.MM.YYYY')}</span>*/}
                                    {/*</div>*/}
                                </Typography>
                                {isMyCourse ?
                                    <Link
                                        to={appRouter.getCourseStatisticsLink(course.id)}
                                        className={classes.link}>
                                        <Button color="primary"
                                                variant="outlined"
                                                size="small"
                                        >
                                            На страницу курса
                                            <KeyboardArrowRightIcon />
                                        </Button>
                                    </Link>
                                    :
                                    <Button color="primary"
                                            variant="outlined"
                                            onClick={this.joinCourse(course.id)}
                                            size="small"
                                    >
                                        Присоединиться
                                    </Button>
                                }
                            </CardActions>
                        </Card>
                    );
                })}
            </div>
        );
    }
}

Home.propTypes = {
    classes: PropTypes.object,
    actions: PropTypes.object,
    courses: PropTypes.array,
    myCourses: PropTypes.array,
    auth: PropTypes.bool,
};

export default withStyles(styles)(connect(Home));