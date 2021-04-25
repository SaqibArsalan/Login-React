/* eslint-disable */
import React, {useState} from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import LoginPage from "../../login/LoginPage";

const DashboardRoutes = (props) => {
    const [sidebarIsOpen, setSidebarOpen] = useState(true);
    const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);
    return (
        <div>
                    <div className="row">
        <Route toggleSidebar={toggleSidebar} sidebarIsOpen={sidebarIsOpen} />
                            <Switch>

                            </Switch>
                    </div>
        </div>
    );
};

export default DashboardRoutes;
