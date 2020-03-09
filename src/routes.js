import React from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Home from './containers/Home';
import SignIn from './containers/SignIn';
import SignUp from './containers/SignUp';

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
        </Route>
    </Router>
);