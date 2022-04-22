
import React, { useState } from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import dispatch from ""
import PeopleIcon from '@mui/icons-material/People';
import GroupIcon from '@mui/icons-material/Group';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

import SegmentIcon from '@mui/icons-material/Segment';
import ConstructionIcon from '@mui/icons-material/Construction';
import GroupsIcon from '@mui/icons-material/Groups';
import SettingsIcon from '@mui/icons-material/Settings';
import WcIcon from '@mui/icons-material/Wc';
import { Link, useNavigate } from 'react-router-dom';
import Garments from "../../static/images/Garments.png"
import PhotoAlbumIcon from '@mui/icons-material/PhotoAlbum';
import { makeStyles } from "@material-ui/core/styles";
import { Escalator } from '@mui/icons-material';
const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg, #FFE3E3 25%, #F3C5C5 80%)',
        color: '#121212',
    },
    root1: {
        color: '#121212',
        '&:hover': {
            color: '#EC255A',
        }
    }
});


const List = props => {
    const classes = useStyles();

    const [isLoggedIn, setIsLoggedIn] = useState(true)
    const data = JSON.parse(localStorage.getItem("userInfo"))
    const role = data["role"]
    // console.log(data)
    // console.log(role)
   
    let list = []
    const iconlist = [<SegmentIcon />, <GroupsIcon />, <PeopleIcon />, <GroupIcon />, <PeopleAltIcon />, <img width="25" src={Garments} alt="Garments"></img>, <ConstructionIcon />, <PhotoAlbumIcon />, <WcIcon />, <SettingsIcon />]
    

    

    if (role === "Supplier")
    {
        const list2 = ['Garments', 'Customers', 'Workers', 'Agencies', 'PhotosPosters', 'Models']
        list = list2.map((value, index) => {
            return (
                <ListItemButton
                    className={classes.root}
                    key={value}
                    sx={{
                        minHeight: 35,
                        justifyContent: props.open ? 'initial' : 'revert',
                        px: 2.5,
                    }}
                >
                    <ListItemIcon
                        className={classes.root1}
                        sx={{
                            minWidth: 0,
                            mr: props.open ? 3 : 'auto',
                            justifyContent: 'center',
                        }}>
                        {iconlist[index]}
                    </ListItemIcon >
                    <Link to={`/${value}`} className={classes.root1}>
                        < ListItemText primary={value} sx={{ opacity: props.open ? 1 : 0 }} />
                    </Link>
                </ListItemButton>
            );

        })
    }
    else if (role === "Agency") {
        const list2 = ['Gadgets', 'Suppliers', 'Customers', 'Workers', 'PhotosPosters', 'Models']
        list = list2.map((value, index) => {
            return (
                <ListItemButton
                    className={classes.root}
                    key={value}
                    sx={{
                        minHeight: 35,
                        justifyContent: props.open ? 'initial' : 'revert',
                        px: 2.5,
                    }}
                >
                    <ListItemIcon
                        className={classes.root1}
                        sx={{
                            minWidth: 0,
                            mr: props.open ? 3 : 'auto',
                            justifyContent: 'center',
                        }}>
                        {iconlist[index]}
                    </ListItemIcon >
                    <Link to={`/${value}`} className={classes.root1}>
                        < ListItemText primary={value} sx={{ opacity: props.open ? 1 : 0 }} />
                    </Link>
                </ListItemButton>
            );
        })
    }
    else if (role === "Customer") {
        const list2 = [ 'Suppliers', 'Agencies', 'Workers', 'PhotosPosters', 'Models']
        list = list2.map((value, index) => {
            return (
                <ListItemButton
                    className={classes.root}
                    key={value}
                    sx={{
                        minHeight: 35,
                        justifyContent: props.open ? 'initial' : 'revert',
                        px: 2.5,
                    }}
                >
                    <ListItemIcon
                        className={classes.root1}
                        sx={{
                            minWidth: 0,
                            mr: props.open ? 3 : 'auto',
                            justifyContent: 'center',
                        }}>
                        {iconlist[index]}
                    </ListItemIcon >
                    <Link to={`/${value}`} className={classes.root1}>
                        < ListItemText primary={value} sx={{ opacity: props.open ? 1 : 0 }} />
                    </Link>
                </ListItemButton>
            );
        })
    }
    else if (role === "Worker") {
        const list2 = [ 'Suppliers', 'Agencies', 'Customers', 'PhotosPosters', 'Models']
        list = list2.map((value, index) => {
            return (
                <ListItemButton
                    className={classes.root}
                    key={value}
                    sx={{
                        minHeight: 35,
                        justifyContent: props.open ? 'initial' : 'revert',
                        px: 2.5,
                    }}
                >
                    <ListItemIcon
                        className={classes.root1}
                        sx={{
                            minWidth: 0,
                            mr: props.open ? 3 : 'auto',
                            justifyContent: 'center',
                        }}>
                        {iconlist[index]}
                    </ListItemIcon >
                    <Link to={`/${value}`} className={classes.root1}>
                        < ListItemText primary={value} sx={{ opacity: props.open ? 1 : 0 }} />
                    </Link>
                </ListItemButton>
            );
        })
    }
    else {
        const list1 = ['Departments', 'Suppliers', 'Customers', 'Workers', 'Agencies', 'Garments', 'Gadgets', 'PhotosPosters', 'Models']
        list = list1.map((value, index) => {
            return (
                <ListItemButton
                    className={classes.root}
                    key={value}
                    sx={{
                        minHeight: 35,
                        justifyContent: props.open ? 'initial' : 'revert',
                        px: 2.5,
                    }}
                >
                    <ListItemIcon
                        className={classes.root1}
                        sx={{
                            minWidth: 0,
                            mr: props.open ? 3 : 'auto',
                            justifyContent: 'center',
                        }}>
                        {iconlist[index]}
                    </ListItemIcon >
                    <Link to={`/${value}`} className={classes.root1}>
                        < ListItemText primary={value} sx={{ opacity: props.open ? 1 : 0 }} />
                    </Link>
                </ListItemButton>
            );
        })
    }
    return (
        <React.Fragment>
            {list}
        </React.Fragment>
    );
};
export default List;