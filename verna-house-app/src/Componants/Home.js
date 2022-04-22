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



const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg, ##FFE3E3 25%, #F3C5C5 80%)',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'black',
    },

});

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open, drawerwidth }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
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

    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };

    const data = JSON.parse(localStorage.getItem("userInfo"))
    const role = data["role"]
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    useEffect(() => {
        if (role !== null) {
            setIsLoggedIn(true)
        }
    }, [])

    // console.log(data)
    // console.log(role)
    return (

        <React.Fragment>
            <Box sx={{ display: 'flex' }} >
                <CssBaseline />
                <AppBarHeader drawerwidth={drawerWidth} open={open} onOpen={handleDrawerOpen} sx={{ display: "flex" }} />
                <Drawer drawerwidth={drawerWidth} open={open} theme={theme} onClose={handleDrawerClose} className={classes.root}></Drawer>
                <Main sx={{ paddingLeft: 1.5, marginTop: 5, marginRight: 0, paddingRight: 0 }} >

                    <Routes>
                        <Route path="/" element={<Main1 />} exact></Route>
                        <Route path="/About" element={<About />} exact />

                        <Route path="/Login" element={<LoginRegistration />} exact />
                        <Route path="/Registration" element={<Registration />} exact />
                        {isLoggedIn &&
                            <Route path="/Account" element={<Account />} exact />}
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
                        {/* {role === "Admin" &&
                          
                        }
                        {role === "Admin" &&
                            
                        } */}
                        <Route path="/PhotosPosters" element={<PhotosPosters />} exact />
                        <Route path="/PhotoPosterForm" element={<PhotoPosterForm />} exact />

                        <Route path="/Models" element={<Models />} exact />
                        <Route path="/ModelForm" element={<ModelForm />} exact />

                        {/* <Route path="/Settings" element={<Settings />} exact /> */}
                        <Route path="/ChangePassword" element={<ChangePassword />} exact />
                        <Route path="/SupplierForm" element={<SupplierForm />} exact />
                        <Route path="/CustomerForm" element={<CustomerForm />} exact />
                        <Route path="/AgencyForm" element={<AgencyForm />} exact />
                        <Route path="/WorkerForm" element={<WorkerForm />} exact />
                        <Route path="/TaskForm" element={<TaskForm />} exact />
                    </Routes>
                </Main>
            </Box>
        </React.Fragment >

    );
};
export default Home;