import React from 'react';
import {
    Route,
} from 'react-router-dom';
import DashboardRoutes from './DashboardRoutes';

const PrivateRoute = () => (
    <Route
        render={props => (<DashboardRoutes {...props} />)}
    />
    /*
    <Route
        render={props => (getFromLocal('auth') ? (<DashboardRoutes {...props} />) : (
            <Redirect
                to={{
                    pathname: "/login",
                    state: { from: props.location },
                }}
            />
        ))
        }
    />
     */
);

export default PrivateRoute;
