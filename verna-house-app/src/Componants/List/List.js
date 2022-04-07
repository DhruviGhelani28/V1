
import React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import PeopleIcon from '@mui/icons-material/People';
import GroupIcon from '@mui/icons-material/Group';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

import SegmentIcon from '@mui/icons-material/Segment';
import ConstructionIcon from '@mui/icons-material/Construction';
import GroupsIcon from '@mui/icons-material/Groups';
import SettingsIcon from '@mui/icons-material/Settings';
import WcIcon from '@mui/icons-material/Wc';
import { Link } from 'react-router-dom';
import Garments from "../../static/images/Garments.png"
import PhotoAlbumIcon from '@mui/icons-material/PhotoAlbum';
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
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
    // const funHandler = [supplierHandler]
    const iconlist = [<SegmentIcon />, <GroupsIcon />, <PeopleIcon />, <GroupIcon />, <PeopleAltIcon />, <img width="25" src={Garments} alt="Garments"></img>, <ConstructionIcon />, <PhotoAlbumIcon />, <WcIcon />, <SettingsIcon />]
    const list1 = ['Departments', 'Suppliers', 'Customers', 'Workers', 'Agencies', 'Garments', 'Gadgets', 'Photos/Posters', 'Models', 'Settings']
    const list = list1.map((value, index) => {
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
                    <ListItemText primary={value} sx={{ opacity: props.open ? 1 : 0 }} />
                </Link>
            </ListItemButton>
        );

    })
    return (
        <React.Fragment>
            {list}
        </React.Fragment>
    );
};
export default List;