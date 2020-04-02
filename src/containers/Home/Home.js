import React from 'react';
import PropTypes from "prop-types";
import get from 'lodash/get';
import {Redirect} from "react-router";

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

import {appRouter} from "../../service/router-service";
import UserService from "../../service/user-service";

import connect from './Home.connect';
import styles from './Home.styles';
import Link from "react-router-dom/Link";

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
                {courses.map(course =>
                    <Card className={classes.card} key={`course-${course.id}`}>
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                {get(course, 'attributes.title', '')}
                            </Typography>
                            <Typography className={classes.description} color="textSecondary">
                                {get(course, 'attributes.description', '')}
                            </Typography>
                        </CardContent>
                        <CardActions className={classes.actions}>
                            {myCourses.some(myCourse => myCourse.id === course.id) ?
                                <Button color="primary"
                                        variant="outlined"
                                >
                                    <Link to={appRouter.getCourseLink(course.id)}
                                          className={classes.link}>
                                        На страницу курса
                                    </Link>
                                </Button>
                                :
                                <Button color="primary"
                                        variant="outlined"
                                        onClick={this.joinCourse(course.id)}
                                >
                                    Присоединиться
                                </Button>
                            }
                        </CardActions>
                    </Card>
                )}
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