import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { useNavigate } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import classes from '../Login.module.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import InputAdornment from '@mui/material/InputAdornment';
// import DatePicker from '../DatePicker';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { useForm } from 'react-hook-form';

import MenuItem from '@mui/material/MenuItem';
import { Select } from '@mui/material';

const Rolls = [
    {
        value: 'Supplier',
        label: 'Supplier',
    },
    {
        value: 'Customer',
        label: 'Customer',
    },
    {
        value: 'Agency',
        label: 'Agency',
    },
    {
        value: 'Worker',
        label: 'Worker',
    },
    {
        value: 'Admin',
        label: 'Admin',
    },

];


const TaskForm = props => {
    const navigate = useNavigate()
    
    const goBackHandler = () => {
        // setOpen(false)
        navigate("/Account")
    }
  
    const [values, setValues] = React.useState({
        'mobileNo': "",
        "agencyName": '',
        "agencyAddress": '',
        "profileImageAgency": '',
        "locationAgency": '',
        "scocialWebsite": "",
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {

        // const data1 = a.push(data)

        console.log(JSON.stringify(data, null, 2));
       
    }

   

    const [value, setValue] = React.useState(null);
    return (
        <Container align="center">
            <Card variant="outlined" sx={{ maxWidth: 500, maxHeight: 8000, borderRadius: 5, borderColor: 'primary.main', paddingTop: 1, m: 1 }} margin="10px">
                <CardActions>
                    <IconButton sx={{ marginLeft: 1, }} onClick={goBackHandler}>
                        <ChevronLeftIcon />
                    </IconButton>
                </CardActions>
                <CardContent>
                    <Typography variant="h4" component='div' fontSize='26px' className={classes.registration}>Add Task</Typography>
                    <Box
                        component="form"
                        sx={{
                            marginTop: 5,
                            marginLeft: 0,
                            '& .MuiTextField-root': { m: 1, width: '40ch', size: 'small' },
                        }}
                        noValidate
                        autoComplete="off"  >
                        <div>
                            <TextField
                                required
                                multiline
                                size='medium'
                                id="username"
                                label="UserName"
                                placeholder="xyz_abc123"
                            />
                            <TextField
                                multiline
                                size='medium'
                                id="role"
                                label="Role"
                            // defaultValue="Agency"
                            />
                            <TextField
                                required
                                multiline
                                size='medium'
                                id="description-task"
                                label="Description"
                                placeholder="xyzbfhfkabc"
                            />
                            {/* <TextField
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                                <DatePicker
                                                    disableFuture
                                                    label="Date"
                                                    openTo="year"
                                                    views={['year', 'month', 'day']}
                                                    value={value}
                                                    onChange={
                                                        (newValue) => { setValue(newValue); }
                                                    }
                                                    renderInput={(params) => <TextField {...params} />}
                                                />
                                            </LocalizationProvider>
                                        </InputAdornment>
                                    ),
                                }}
                                variant="outlined">
                            </TextField> */}
                            <TextField
                                disablefuture='true'
                                variant="outlined"
                                color="primary"
                                inputProps={{
                                    type: "date",
                                    accept: "date"
                                }}

                                label="Date" />

                            {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DatePicker
                                    disableFuture
                                    label="Date"
                                    openTo="year"
                                    views={['year', 'month', 'day']}
                                    value={value}
                                    onChange={
                                        (newValue) => { setValue(newValue); }
                                    }
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </LocalizationProvider> */}
                            <FormControl required sx={{ m: 1, width: '40ch' }} >
                                <InputLabel id="roll-id">Roll</InputLabel>
                                <Select
                                    sx={{ textAlign: 'left' }}
                                    labelId="demo-simple-select-label"
                                    id="select-roll"
                                    label="Roll"
                                    // value={'fghg'}
                                    onChange={rollChangeHandler}
                                >
                                    {Rolls.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </Select>
                                <FormHelperText>Please select your roll in system.</FormHelperText>
                            </FormControl>
                            <div className={classes.button}>
                                <Button
                                    variant="contained"
                                    onClick={props.onClick}
                                    sx={{
                                        marginTop: 0.5,
                                        marginRight: -34,
                                    }}>
                                    Submit</Button>
                            </div>
                        </div>
                    </Box>
                </CardContent>
            </Card>
        </Container>
    );

};
export default TaskForm;