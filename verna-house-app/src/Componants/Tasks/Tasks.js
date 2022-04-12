
import React, { useEffect } from "react"
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import classes from '../Login.module.css';
import Divider from '@mui/material/Divider';
import { useNavigate } from "react-router-dom";
import Backdrop from '@mui/material/Backdrop';
import TaskForm from './TaskForm';
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { getMyTasks } from "../../Store/Task/TaskAction";


const Tasks = (props) => {
    const dispatch = useDispatch()
    const myTasks = useSelector((state) => state.tasks)
    const { loading, details, error } = myTasks;
    useEffect(() => {
        dispatch(getMyTasks())
    }, [dispatch])
    console.log(myTasks.getMyTasks)
    const navigate = useNavigate()
    const addTaskHandler = () => {
        navigate("/TaskForm")
    }

    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleToggle = () => {
        setOpen(!open);
    };
    return (
        <React.Fragment>
            {/* <Box sx={{ '& > :not(style)': { m: 0.5 }, marginLeft: 150, height: 5 }} className={classes.toggleactionbutton}>
                <Fab color="primary" aria-label="add" size="small">
                    <AddIcon />
                </Fab>
                <Fab color="secondary" aria-label="edit" size="small">
                    <EditIcon />
                </Fab>
            </Box> */}

            <Grid sx={{ flexGrow: 1 }} container spacing={{ xs: 0, md: 1 }}  >
                <Grid item xs={12} >
                    <Grid container justifyContent="flex-end" alignItems='center' direction='row' spacing={3} >
                        {/* onClick={addTaskHandler} */}

                        <Fab color="primary" aria-label="add" size="small" sx={{ marginTop: 0.3 }}  onClick={handleToggle} >
                            <AddIcon />
                            
                        </Fab>
                        <Backdrop
                            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                            open={open}
                           
                        >
                            <TaskForm onClick={handleClose} open={open}></TaskForm>
                        </Backdrop>
                        {/* <Fab color="secondary" aria-label="edit" size="small" sx={{ marginLeft: 0.3 }}>
                            <EditIcon />
                        </Fab> */}
                    </Grid>
                </Grid>

                <Grid item xs={12} >
                    <Grid container justifyContent="flex-start" alignItems='flex-start' direction='row' spacing={2} >
                        {[1, 2, 3, 4, 5, 6].map((value) => (
                            <Grid key={value} item xs={3}>
                                <Paper
                                    sx={{
                                        height: 300,
                                        width: 250,
                                        padding: 0.5,
                                        margin: 0,
                                        // backgroundColor: (theme) =>
                                        //     theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                                    }}
                                >
                                    <Grid container direction={'row'} spacing={0}>
                                        <Grid item xs={8}>
                                            <Typography sx={{ fontSize: 15 }} color="text.primary" align="left">
                                                Alina Tandel
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={4} align="right">
                                            <Fab color="secondary" aria-label="edit" size="small" sx={{ marginLeft: 0.3 }}>
                                                <EditIcon />
                                            </Fab>
                                        </Grid>
                                    </Grid>
                                    <Grid container direction={'row'}  >
                                        <Grid item xs={12} >
                                            <div className={classes.root1}>
                                                <Typography sx={{ fontSize: 14 }} color="text.secondary" align="left">
                                                    Person no
                                                </Typography>
                                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                                    Work category
                                                </Typography>
                                                <Typography variant="body2">
                                                    exprience
                                                    <br />
                                                    Preferred Time
                                                    <br />
                                                    Age
                                                </Typography>
                                            </div>
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};
export default Tasks;
