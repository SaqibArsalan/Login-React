import React, { useState } from "react";
import {BrowserRouter as Router, Redirect, Switch} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Route from "./components/routes/Routes";
import "./App.css";
import LoginPage from "./login/LoginPage";
import PrivateRoute from "./components/routes/PrivateRoute";
import SignUpPage from "./signup/SignUpPage";


const App = () => {

    return (
        <Router>
            <Switch>
                <Route exact path="/login" component={LoginPage} />
                <Route exact path="/signup" component={SignUpPage} />
                <Redirect from="/" to="/login" component={LoginPage} />
                {/*<PrivateRoute path="/" />*/}
            </Switch>
        </Router>
    );
};

export default App;
