import React, { useState, useEffect } from "react";
import AppBarHeader from "./AppBar/AppBarHeader";
import Drawer from "./Drawer/Drawer";
// import DrawerHeader from "./Drawer/DrawerHeader";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { makeStyles } from "@material-ui/core/styles";
import { styled, useTheme } from '@mui/material/styles';
import classes1 from "./Login.module.css"
// import Button from '@mui/material/Button';
import { Route, Routes, Navigate } from 'react-router-dom';
import Suppliers from "./Suppliers/Suppliers";
import Registration from "./Login/Registration";
import Main1 from "./Main/Main";
import Agencies from "./Agencies/Agencies";
import LoginRegistration from './Login/LoginRegistration';
import About from './AppBar/About';
import Departments from './Pending/Departments/Departments';
import Customers from './Customers/Customers';
import Workers from './Workers/Workers';
import Garments from './Garments/Garments';
import Gadgets from "./Gadgets/Gadgets";
import PhotosPosters from './Photos_Posters/PhotosPosters';
import Models from './Models/Models';
import Messages from './Pending/Messages/Messages';
import Notifications from './Pending/Notifications/Notifications';
// import Settings from "./Pending/Settings/Settings";
import ChangePassword from "./Login/ChangePassword";
import SupplierForm from "./Suppliers/SupplierForm";
import CustomerForm from "./Customers/CustomerForm";
import WorkerForm from "./Workers/WorkerForm";
import AgencyForm from "./Agencies/AgencyForm";
import TaskForm from "./Tasks/TaskForm";
import Account from "./Account/Account";
import PhotoPosterForm from "./Photos_Posters/PhotoPosterForm";
import ModelForm from "./Models/ModelForm";
import GarmentForm from "./Garments/GarmentForm";
import GadgetForm from "./Gadgets/GadgetForm";
import Tasks from "./Tasks/Tasks";





const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg, #575758  25%, #2F3031 80%)',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
    },

});

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open, drawerwidth }) => ({
        flexGrow: 1,
        padding: 0,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: drawerwidth,
        width: `calc(100% - ${drawerwidth}px)`,
        ...(open && {
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const Home = props => {
    const classes = useStyles();

    const drawerWidth = 200;
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    let role = ""
    const data = JSON.parse(localStorage.getItem("userInfo"))

    const handleDrawerOpen = () => {
        if (data !== null) {
            setOpen(true);
        }

    };
    const handleDrawerClose = () => {
        setOpen(false);
    };

    console.log(role)
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    useEffect(() => {

        // role = data["role"]
        if (data !== null) {
            role = data["role"]
            setIsLoggedIn(true)
        }
    }, [])

    console.log(data)
    // console.log(role)
    return (

        <React.Fragment>
            <Box sx={{ display: 'flex' }} >
                <CssBaseline />

                <AppBarHeader drawerwidth={drawerWidth} open={open} onOpen={handleDrawerOpen} sx={{ display: "flex" }} theme={theme} />
                {data === null &&
                    <Main sx={{ paddingLeft: 0.1, marginTop: 8.1, marginRight: 0, paddingRight: 0.1 }} className={classes1.homeback} >

                        <Routes>
                            {/* <Route path="/Main1" element={<Main1 />} exact></Route> */}
                            <Route path="/About" element={<About />} exact />
                            <Route path="/Login" element={<LoginRegistration theme={theme} />} exact />
                            <Route path="/Registration" element={<Registration />} exact />
                            <Route path="/SupplierForm" element={<SupplierForm />} exact />
                            <Route path="/CustomerForm" element={<CustomerForm />} exact />
                            <Route path="/AgencyForm" element={<AgencyForm />} exact />
                            <Route path="/WorkerForm" element={<WorkerForm />} exact />
                            <Route path="/ModelForm" element={<ModelForm />} exact />
                        </Routes>
                    </Main>
                }
                {data !== null &&
                    <>
                        <Drawer drawerwidth={drawerWidth} open={open} theme={theme} onClose={handleDrawerClose} className={classes.root} />
                        <Main sx={{ paddingLeft: 0.1, marginTop: 8.1, marginRight: 0, paddingRight: 1 }} className={classes1.homeback}>

                            <Routes>
                                <Route path="/Main1" element={<Main1 />} exact></Route>
                                <Route path="/About" element={<About />} exact />
                                <Route path="/Login" element={<LoginRegistration theme={theme} />} exact />
                                <Route path="/Registration" element={<Registration />} exact />
                                {isLoggedIn &&
                                    <Route path="/Account/Tasks" element={<Account />} exact />}
                                {role !== "Supplier" &&
                                    <Route path="/Suppliers" element={<Suppliers />} exact />}
                                {role !== "Customer" &&
                                    <Route path="/Customers" element={<Customers />} exact />}
                                {role !== "Worker" &&
                                    <Route path="/Workers" element={<Workers />} exact />}
                                {role !== "Agency" &&
                                    <Route path="/Agencies" element={<Agencies />} exact />}
                                {role === "Supplier" && <>
                                    <Route path="/Garments" element={<Garments />} exact />
                                    <Route path="/Garments/GarmentForm" element={<Navigate replace to="GarmentForm" />} exact />
                                    <Route path="/GarmentForm" element={<GarmentForm />} exact />
                                </>
                                }
                                {role === "Agency" && <>
                                    <Route path="/Gadgets" element={<Gadgets />} exact />
                                    <Route path="/Gadgets/GadgetForm" element={<Navigate replace to="GadgetForm" />} exact />
                                    <Route path="/GadgetForm" element={<GadgetForm />} exact />

                                </>
                                }

                                {role === "Admin" && <>
                                    <Route path="/Notifications" element={<Notifications />} exact />
                                    <Route path="/Messages" element={<Messages />} exact />
                                    <Route path="/Departments" element={<Departments />} exact />
                                </>
                                }

                                <Route path="/PhotosPosters" element={<PhotosPosters />} exact />
                                <Route path="/PhotoPosterForm" element={<PhotoPosterForm />} exact />

                                <Route path="/Models" element={<Models />} exact />


                                {/* <Route path="/Settings" element={<Settings />} exact /> */}
                                <Route path="/ChangePassword" element={<ChangePassword />} exact />
                                <Route path="/Tasks" element={<Tasks />} exact />
                                <Route path="/TaskForm" element={<TaskForm />} exact />
                            </Routes>
                        </Main>
                    </>}
            </Box>
        </React.Fragment >

    );
};
export default Home;