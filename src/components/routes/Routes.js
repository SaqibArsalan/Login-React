import React from "react";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../../login/LoginPage";
import SignUpPage from "../../signup/SignUpPage";

const Routes = () => (
        <Switch>
            <Route exact path={"/login"} component={LoginPage} />
            <Route exact path="/signup" component={SignUpPage} />
        </Switch>
);

export default Routes;
