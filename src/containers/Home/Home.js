import React from 'react';
import PropTypes from "prop-types";
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

const userService = UserService.factory();

class Home extends React.PureComponent{
    componentDidMount() {
        this.props.actions.getCourses();
        this.props.actions.getMyCourses();
    }

    render() {
        const {classes, auth, courses, myCourses} = this.props;
        const isAuth = userService.isAuth() && auth;

        if (!isAuth) return <Redirect to={appRouter.getSignInRoute()} />;

        return(
            <>
                <Card className={classes.root}>
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            Course name
                        </Typography>
                        <Typography className={classes.description} color="textSecondary">
                            course description course descriptioncourse descriptioncourse description course description course description
                        </Typography>
                    </CardContent>
                    <CardActions className={classes.actions}>
                        <Button color="primary"
                                variant="outlined"
                        >
                            Присоединиться
                        </Button>
                    </CardActions>
                </Card>
            </>
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