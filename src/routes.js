import React from "react";
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';

import Layout from './layout';
import SignIn from './containers/SignIn';
import SignUp from './containers/SignUp';
import Course from './containers/Course';

import RouterService from './service/router-service';
import UserService from './service/user-service';

const routerService = RouterService.factory();
const userService = new UserService();

export default () => (
    <Router>
        <Layout>
            <Route path={routerService.getSignInRoute()}
                   component={SignIn}
            />
            <Route path={routerService.getSignUpRoute()}
                   component={SignUp}
            />
            <Route path={routerService.getCourseRoute()}>
                {!userService.isAuth() ? <Redirect to={routerService.getSignInRoute()} /> : <Course />}
            </Route>
        </Layout>
    </Router>
);