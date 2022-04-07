import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from './Login';
import Registration from "./Registration";
import ChangePassword from "./ChangePassword";
// import Button from '@mui/material/Button';
// import { Outlet } from "react-router-dom";

import { Container } from "@mui/material";


const LoginRegistration = props => {
    // let match = useMatch();
    const navigate = useNavigate()

    const registrationHandler = () => {

        navigate("/Registration")
    }
    const loginHandler = () => {
        navigate("/")
    }
    return (
        <React.Fragment>
            <Container align="center">
                <Routes>
                    <Route path="/" element={<Login onClick={loginHandler} onRegisterClick={registrationHandler} />} exact />
                    <Route path="/Registration" element={<Registration />} exact />
                    <Route path="/ChangePassword" element={<ChangePassword />} exact />
                </Routes>
            </Container>


        </React.Fragment>

    );

};
export default LoginRegistration;