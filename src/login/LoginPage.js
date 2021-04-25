import React, {useEffect, useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import {useHistory} from "react-router-dom";
import {connect} from "react-redux";
import {login} from "../redux/actions/AuthActions";

const LoginPage = (props) =>  {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let history = useHistory();

    const {auth, login, isLoginSuccessfull, isError } = props;

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {

        const loginPayload = {
            email: email,
            password: password
        }

        login(loginPayload);

        event.preventDefault();
    }

    useEffect(() => {

        if (isLoginSuccessfull) {
            history.push("/orders/view-orders");
        }

    }, [isLoginSuccessfull]);

    useEffect(() => {

        if (isError) {
            window.alert("Something went Wrong, Please Try Again");
        }

    }, [isError]);

    const handleRegister = (event) => {
        console.log("event was clicked ", event);
        history.push("/signup");
    }

    return (
        <div className="Login">
            <h1 className="heading">Company Name</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group size="lg" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        autoFocus
                        autocomplete="off"
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>
                <Form.Group size="lg" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Button block size="lg" type="submit" disabled={!validateForm()}>
                    Login
                </Button>
            </Form>
            <h3 onClick={handleRegister}>Doesn't have an Account? Click Here!</h3>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth.auth,
        isLoginSuccessfull: state.auth.isLoginSuccessfull,
        isError: state.auth.isError,
        error: state.auth.error
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (payload) => dispatch(login(payload))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
