import React, {useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";
import Form from "react-bootstrap/Form";
import {Button, Modal} from "react-bootstrap";
import {connect} from "react-redux";
import {signUp} from "../redux/actions/SignUpActions";
import Dropdown from "../components/common/Dropdown";
import "./SignUp.css";
import {Col, Row} from "reactstrap";

let SignUpPage = (props) => {
    const [fullName, setFullName ] = useState("");
    const [ cnic , setCnic ] = useState("");
    const [address, setAddress ]= useState("");
    const [mobile, setMobileNumber ] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [adminType, setAdminType ] = useState("");
    const [adminLevel, setAdminLevel ] = useState("");
    const [categoriesSelect, setcategoriesSelect] = useState([]);
    const [selectedCategory, setSelectedCategory ]= useState(options[0]);

    const [dropdownValuesLength, setDropdownValuesLength] = useState(0);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let history = useHistory();

    const {signUp, userSignUp, isSignUpSuccessful, isError, getAllAdminTypesDropdown,
        adminDropdownValues, createNewAdminType, createAdminType, isAdminTypeCreated
    } = props;

    function validateForm() {
        return email.length > 0 && password.length > 0 && fullName.length > 0 && mobile.length > 0
            && cnic.length > 0 && selectedCategory.id != 'Select Category';
    }

    // const validateModal = () => {
    //     return adminType.length > 0 && adminLevel.length > 0;
    // }

    // const handleAdminCategory = (event) => {
    //
    //     const adminTypePayload = {
    //         type: adminType,
    //         level: adminLevel
    //     }
    //
    //     createAdminType(adminTypePayload);
    // }

    function handleSubmit(event) {

        const signUpPayload = {
            full_name: fullName,
            cnic: cnic,
            adminType: selectedCategory.id,
            address: address ? address : "",
            mobile: mobile,
            email: email,
            password: password
        }

        signUp(signUpPayload);

        event.preventDefault();
    }

    // useEffect(() => {
    //     getAllAdminTypesDropdown();
    //
    //     if (adminDropdownValues.length > 0) {
    //         setcategoriesSelect(adminDropdownValues);
    //         setDropdownValuesLength(adminDropdownValues.length + 1);
    //
    //     }
    // },[adminDropdownValues.length > 0])

    // useEffect(() => {
    //     if (isAdminTypeCreated) {
    //
    //         setShow(false);
    //
    //         getAllAdminTypesDropdown();
    //
    //         if (adminDropdownValues) {
    //             setcategoriesSelect(adminDropdownValues);
    //         }
    //     }
    // }, [isAdminTypeCreated, dropdownValuesLength > adminDropdownValues.length])

    useEffect(() => {

        if (isSignUpSuccessful) {
            history.push("/login");
        }

    }, [isSignUpSuccessful]);

    useEffect(() => {

        if (isError) {
           window.alert("Something went Wrong, Please Try Again!");
        }

    }, [isError]);

    return (
        <div className="SignUp">
            <h1 className="heading">Company Name</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group size="lg" controlId="fullName">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                        autoFocus
                        type="text"
                        value={fullName}
                        required={true}
                        onChange={(e) => setFullName(e.target.value)}
                    />
                </Form.Group>
                <Form.Group size="lg" controlId="cnic">
                    <Form.Label>Cnic</Form.Label>
                    <Form.Control
                        autoFocus
                        type="text"
                        value={cnic}
                        required={true}
                        onChange={(e) => setCnic(e.target.value)}
                    />
                </Form.Group>
                {/*<Row className="align-items-center">*/}
                {/*    <Col>*/}
                {/*        <Dropdown selected={selectedCategory} onSelectedChange={setSelectedCategory}*/}
                {/*                  options={categoriesSelect} label="Select Category"/>*/}
                {/*    </Col>*/}
                {/*    <Col>*/}
                {/*        <Button className="category-button" block size="lg" type="submit"*/}
                {/*                onClick={handleShow}>*/}
                {/*            Add a Category*/}
                {/*        </Button>*/}
                {/*    </Col>*/}

                {/*</Row>*/}

                <Form.Group size="lg" controlId="address">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                        autoFocus
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </Form.Group>
                <Form.Group size="lg" controlId="mobile">
                    <Form.Label>Mobile</Form.Label>
                    <Form.Control
                        autoFocus
                        type="text"
                        value={mobile}
                        required={true}
                        onChange={(e) => setMobileNumber(e.target.value)}
                    />
                </Form.Group>
                <Form.Group size="lg" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        autoFocus
                        type="email"
                        required={true}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>
                <Form.Group size="lg" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        value={password}
                        required={true}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Button block size="lg" type="submit" disabled={!validateForm()}>
                    SignUp
                </Button>
            </Form>

                {/*<Modal show={show} onHide={handleClose}>*/}
                {/*    <Modal.Header closeButton>*/}
                {/*        <Modal.Title>Add Admin Category</Modal.Title>*/}
                {/*    </Modal.Header>*/}
                {/*    <Modal.Body>*/}
                {/*        <Form.Group size="lg" controlId="type">*/}
                {/*            <Form.Label>Enter Admin Type</Form.Label>*/}
                {/*            <Form.Control*/}
                {/*                type="text"*/}
                {/*                value={adminType}*/}
                {/*                required={true}*/}
                {/*                onChange={(e) => setAdminType(e.target.value)}*/}
                {/*            />*/}
                {/*        </Form.Group>*/}

                {/*        <Form.Group size="lg" controlId="level">*/}
                {/*            <Form.Label>Enter Admin Level</Form.Label>*/}
                {/*            <Form.Control*/}
                {/*                type="text"*/}
                {/*                value={adminLevel}*/}
                {/*                required={true}*/}
                {/*                onChange={(e) => setAdminLevel(e.target.value)}*/}
                {/*            />*/}
                {/*        </Form.Group>*/}
                {/*    </Modal.Body>*/}
                {/*    <Modal.Footer>*/}
                {/*        <Button variant="secondary" onClick={handleClose}>*/}
                {/*            Close*/}
                {/*        </Button>*/}
                {/*        <Button variant="primary" onClick={handleAdminCategory} disabled={!validateModal()}>*/}
                {/*            Save*/}
                {/*        </Button>*/}
                {/*    </Modal.Footer>*/}
                {/*</Modal>*/}
        </div>
        // <div className="SignUp">
        // <h1 className="heading">MGrocery</h1>
        // <form onSubmit={handleSubmit(onSubmit)} className="ui form error">
        //     <Field name="fullName" component={renderInput} label="Enter Full Name"/>
        //     <Field name="cnic" component={renderInput} label="Enter CNIC"/>
        //     <div className="row">
        //     <Dropdown selected={selectedCategory} onSelectedChange={setSelectedCategory}
        //               options={categoriesSelect} label="Select Category" className="col-sm-5"/>
        //     </div>
        //     <Field name="mobile" component={renderInput} label="Enter Mobile Number"
        //            onChange={(e) => setMobileNumber(e.target.value)}/>
        //     <Field name="email" component={renderInput} label="Enter Email"/>
        //     <Field name="password" component={renderPassword} label="Enter Password"/>
        //     <div>
        //         <Button block size="lg" type="submit">
        //             SignUp
        //         </Button>
        //     </div>
        // </form>
        // </div>
    );

}

const options = [
    {
        id: 'Select Category',
        value: 'Please Select'
    }
]

const mapStateToProps = (state) => {
    return {
        userSignUp: state.signUp.signUp,
        isSignUpSuccessful: state.signUp.isSignUpSuccessful,
        isError: state.signUp.isError,
        error: state.signUp.error,
        // adminDropdownValues: state.admin.adminDropdown,
        // createNewAdminType: state.admin.createAdminType,
        // isAdminTypeCreated: state.admin.isAdminTypeCreated
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (payload) => dispatch(signUp(payload)),
        // getAllAdminTypesDropdown: () => dispatch(getAllAdminTypesDropdown()),
        // createAdminType: (payload) => dispatch(createAdminType(payload))
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);