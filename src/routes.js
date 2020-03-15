import React from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Layout from './layout';
import SignIn from './containers/SignIn';
import SignUp from './containers/SignUp';
import Course from './containers/Course';

export default () => (
    <Router>
        <Layout>
            <Route path="/sign-in"
                   component={SignIn}
            />
            <Route path="/sign-up"
                   component={SignUp}
            />
            <Route path="/course" //todo: change route
                   component={Course}
            />
        </Layout>
    </Router>
);