
import React from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";
import Tooltip from '@mui/material/Tooltip';
import reptile from '../../static/PhotoPoster/contemplative-reptile.jpg';
import { makeStyles } from "@material-ui/core/styles";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Backdrop from '@mui/material/Backdrop';
import GarmentForm from "./GarmentForm";




const useStyles = makeStyles({
    root: {
        margin: 0.5,
        paddingTop: 45,
    },
    root1: {
        marginTop: 5,
    }
})
const Garments = props => {
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleToggle = () => {
        setOpen(!open);
    };
    const classes = useStyles()


    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    // const dispatch = useDispatch()
    // const myTasks = useSelector((state) => state.tasks)
    // const { getMyTasks } = myTasks;
    // const task = useSelector((state) => state.addTask)
    // const { loading, success, addTask } = task;
    // const [tasks, setTasks] = useState([])

    // useEffect(() => {
    //     dispatch(MyTasks())
    // }, [dispatch, task])

    // useEffect(() => {
    //     setTasks(getMyTasks)

    // }, [getMyTasks, task])
    // console.log(tasks)
    const navigate = useNavigate()


    return (
        <React.Fragment>
            <h2>Garments of suppliers will be here</h2>
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
                            <GarmentForm onClick={handleClose} open={open}></GarmentForm>
                        </Backdrop>
                    </Grid>
                </Grid>
            </Grid>
            <Card sx={{ maxWidth: 345, borderColor: "#121212", borderWidth: 0.1, borderRadius: 2 }} variant="outlined">
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="250"
                    image={reptile}
                // "../..//static/PhotoPoster/contemplative-reptile.jpg"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" align="left">
                        Person no
                    </Typography>
                    <Typography color="text.secondary">
                        Work category
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Give Order</Button>
                    <Button size="small">View Details</Button>
                </CardActions>
            </Card>
        </React.Fragment>
    );

};
export default Garments;



