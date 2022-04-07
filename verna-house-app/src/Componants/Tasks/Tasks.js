
import React from "react"
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import classes from '../Login.module.css';
import Divider from '@mui/material/Divider';
import { useNavigate } from "react-router-dom";

const Tasks = (props) => {

    const navigate = useNavigate()
    const addTaskHandler = () => {
        navigate("/TaskForm")
    }
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
                        <Fab color="primary" aria-label="add" size="small" sx={{ marginTop: 0.3 }} onClick={addTaskHandler}>
                            <AddIcon />
                        </Fab>
                        <Fab color="secondary" aria-label="edit" size="small" sx={{ marginLeft: 0.3 }}>
                            <EditIcon />
                        </Fab>
                    </Grid>

                </Grid>

                <Grid item xs={12} >
                    <Grid container justifyContent="flex-start" alignItems='center' direction='row' spacing={3} >
                        {[1, 2, 3, 4, 5, 6].map((value) => (
                            <Grid key={value} item>
                                <Paper
                                    sx={{
                                        height: 420,
                                        width: 400,
                                        backgroundColor: (theme) =>
                                            theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                                    }}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};
export default Tasks;
