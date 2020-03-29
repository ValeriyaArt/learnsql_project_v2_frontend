import React from "react";
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';

import Layout from './layout';
import SignIn from './containers/SignIn';
import SignUp from './containers/SignUp';
import Course from './containers/Course';
import Profile from './containers/Profile';
import Home from './containers/Home';

import RouterService from './service/router-service';
import UserService from './service/user-service';

const routerService = RouterService.factory();
const userService = UserService.factory();

export default () => (
    <Router>
        <Layout>
            <Route path={routerService.getSignInRoute()}>
                {!userService.isAuth() ? <SignIn /> : <Redirect to={routerService.getHomeRoute()} /> }
            </Route>
            <Route path={routerService.getSignUpRoute()}>
                {!userService.isAuth() ? <SignUp /> : <Redirect to={routerService.getProfileRoute()} /> }
            </Route>
            <Route path={routerService.getProfileRoute()}>
                {!userService.isAuth() ? <Redirect to={routerService.getSignInRoute()} /> : <Profile />}
            </Route>
            <Route path={routerService.getCourseRoute()}>
                {!userService.isAuth() ? <Redirect to={routerService.getSignInRoute()} /> : <Course />}
            </Route>
            <Route path={routerService.getHomeRoute()}>
                {!userService.isAuth() ? <Redirect to={routerService.getSignInRoute()} /> : <Home />}
            </Route>
        </Layout>
    </Router>
);