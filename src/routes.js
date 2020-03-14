import React from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Home from './containers/Home';
import SignIn from './containers/SignIn';
import SignUp from './containers/SignUp';
import Course from './containers/Course';

export default () => (
    <Router>
        <Route path="/"
               component={Home}
        >
            <Route path="/sign-in"
                   component={SignIn}
            />
            <Route path="/sign-up"
                   component={SignUp}
            />
            <Route path="/course" //todo: change route
                   component={Course}
            />
        </Route>
    </Router>
);