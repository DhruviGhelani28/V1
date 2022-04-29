

import React, { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import GradeRoundedIcon from "@mui/icons-material/GradeRounded";
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { Grid } from "@mui/material";
import Tooltip from '@mui/material/Tooltip';
import reptile from '../../static/PhotoPoster/contemplative-reptile.jpg';
import { makeStyles } from "@material-ui/core/styles";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Backdrop from '@mui/material/Backdrop';
import GadgetForm from "./GadgetForm";
import { useDispatch, useSelector } from "react-redux";
import { getMyGadgets, addGadget } from "../../Store/Gadget/GadgetAction";




const useStyles = makeStyles({
    root: {
        margin: 0.5,
        paddingTop: 45,
    },
    root1: {
        marginTop: 5,
    }
})
const Gadgets = props => {
    const dispatch = useDispatch()
    const mygadgets = useSelector((state) => state.gadgets);
    // const { loading, details, error } = gadgets;
    const gadget = useSelector((state) => state.addGadget)
    const [gadgets, setGadgets] = useState([])
    
    console.log(mygadgets.getMyGadgets)
    useEffect(() => {
        dispatch(getMyGadgets())
    }, [dispatch, gadget])

    useEffect(() => {
        setGadgets(mygadgets.getMyGadgets)

    }, [mygadgets.getMyGadgets, gadget])
    console.log(gadgets)

    // const length = gadgets.getMyGadgets.length
    // console.log(length)
    // const rows = suppliers.getSuppliers

    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleToggle = () => {
        setOpen(!open);
    };
    const classes = useStyles()


    return (
        <React.Fragment>
            <h2>Tools of photo shooting will be here</h2>
            {/* {role === "Admin" && } */}
            <Grid sx={{ flexGrow: 1 }} container spacing={{ xs: 0, md: 1 }}  >
                <Grid item xs={12} >
                    <Grid container justifyContent="flex-end" alignItems='center' direction='row' spacing={3} >
                        <Fab color="primary" aria-label="add" size="small" sx={{ marginTop: 0.3, marginRight: 2 }} onClick={handleToggle} >
                            <AddIcon />
                        </Fab>
                        <Backdrop
                            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                            open={open}
                        >
                            <GadgetForm onClick={handleClose} open={open}></GadgetForm>
                        </Backdrop>
                    </Grid>
                </Grid>
            </Grid>

            <Grid container justifyContent="flex-start" alignItems='flex-start' direction='row' spacing={1} >
                {gadgets && gadgets.map((value, index) => (
                    <Grid item xs={3} key={index}>
                        <Card sx={{ maxWidth: 345, borderColor: "#121212", borderWidth: 0.1, borderRadius: 2, maxHeight: 550 }} variant="outlined">
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="250"
                                image={`http://127.0.0.1:8000${value.gadgetImage}`}
                            // "../..//static/PhotoPoster/contemplative-reptile.jpg"
                            />
                            <CardContent sx={{ marginTop: 0, marginBottom: 0, paddingBottom: 0 }}>
                                <Typography gutterBottom variant="h6" component="div" color="text.primary">
                                    Garment Name: {value.garmentName}
                                </Typography>
                                <Typography variant="body2" color="text.primary">
                                    Price: {value.price}
                                </Typography>
                                <Typography sx={{ fontSize: 14 }} color="text.primary" align="left">
                                    OrderStatus: {value.orderStatus}
                                </Typography>
                                <Typography color="text.primary">
                                    TimeDuration:   {value.timeDuration.split("")[0]} Days
                                </Typography>
                            </CardContent>
                            <CardActions sx={{ marginTop: 0, marginBottom: 0, justifyContent: "flex-end", paddingBottom: 0.3 }}>
                                <Button size="small">Give Order</Button>
                                {/* <Button size="small">View Details</Button> */}
                            </CardActions>
                        </Card>
                    </Grid>
                ))}</Grid>
        </React.Fragment>
    );

};
export default Gadgets;