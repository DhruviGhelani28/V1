
import React from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import classes from '../Login.module.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import InputAdornment from '@mui/material/InputAdornment';
import { makeStyles } from "@material-ui/core/styles";
import { getRegisterData } from '../../Store/Register/RegisterAction';
import { getWorker } from '../../Store/Worker/WorkerAction';
import UploadButton from '../UploadButton';
// import PhotoCamera from '@mui/icons-material/PhotoCamera';
// import userEvent from '@testing-library/user-event';
const useStyles = makeStyles({
    root1: {
        color: '#121212',
        '&:hover': {
            color: '#EC255A',
        }
    },
    root4:
    {
        background: 'linear-gradient(45deg, #FFE3E3 25%, #F3C5C5 80%)',
        color: 'action.home',
    },
    root5:
    {
        marginTop: 30,
    },
    allfield:
    {
        width: '40ch',
        marginTop: '10ch',
        background: 'linear-gradient(45deg, #FFE3E3 25%, #F3C5C5 80%)',
        color: 'action.home',
    }
});

const EditProfileWorker = props => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    console.log("workerId : ---", (props.workerId))
    const worker = useSelector((state) => state.worker)
    console.log(worker.getWorker)
    const data = worker.getWorker

    const classes1 = useStyles();
    const [values, setValues] = React.useState(data);
    console.log(values)

    const handleChange = (prop) => (event) => {

        console.log(prop)
        setValues({ ...values, [prop]: event.target.value });
        if (prop == "profile_image") {
            console.log(event.target.files[0])
            setValues({ ...values, profile_image: event.target.files[0].name });
        }
    };
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {

        console.log(values)
        const data1 = { ...values }
        // console.log(JSON.stringify(data, null, 2));
        // console.log(values, typeof(values))
        // console.log(data1)
        dispatch(getRegisterData({ data: data1 }));
        console.log("worker edited successfully")
        navigate("/Workers")
    }
    useEffect(() => {
        const body = document.querySelector("body");
        body.style.overflow = props.open ? "hidden" : "auto";
    }, [props.open])
    return (
        <Container align="center">
            <Card
                variant="outlined"
                sx={{
                    maxWidth: 500, maxHeight: 8000, background: 'linear-gradient(45deg, #F3C5C5 30%, #FFE3E3 50%,#F3C5C5 30%,#FFE3E3 50%)',
                    borderColor: '#EC255A',
                    borderWidth: 1,
                    borderRadius: 5,
                    color: 'action.home',
                    paddingTop: 1,
                    m: 1,
                    marginTop: 10,
                    transition: "all 0.5s ease",
                    "&:hover": { transform: "scale(1.05)", borderRadius: "40px" },
                }}
                component="form"
                onSubmit={handleSubmit(onSubmit)}
            >
                <CardActions>
                    <IconButton sx={{ marginLeft: 1, }} onClick={props.onClick}>
                        <ChevronLeftIcon />
                    </IconButton>
                </CardActions>
                <CardContent>
                    <Typography variant="h4" component='div' fontSize='26px' className={classes.registration}>Worker Profile</Typography>

                    <div className={classes1.root5}>
                        <TextField
                            sx={{ marginTop: 2 }}
                            className={classes1.allfield}
                            required

                            id="fullname"
                            label="Enter Your Name"
                            placeholder="xyz abc"
                            inputprops={{ tabIndex: "1" }}
                            {...register('fullname', { required: true, maxLength: 20, minLength: 4 })}
                            error={!!errors?.fullname}
                            helpertext={errors?.fullname ? errors.fullname.message : null}
                            value={values['name'] ? values['name'] : ''}
                            onChange={handleChange('name')}
                        />

                        <TextField
                            sx={{ marginTop: 1 }}
                            className={classes1.allfield}
                            required

                            id="email"
                            label="Enter Your Email Address"
                            placeholder="xyz@abc.com"
                            inputprops={{ tabIndex: "2" }}
                            {...register('email', {
                                required: true, pattern: {
                                    value: /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/i,
                                    message: "Invalid Email Address",
                                },
                            })}
                            error={!!errors?.email}
                            helpertext={errors?.email ? errors.email.message : null}
                            value={values.email}
                            onChange={handleChange('email')}
                        />
                        <TextField
                            sx={{ marginTop: 1 }}
                            className={classes1.allfield}
                            required

                            id="username"
                            label="Enter Your UserName"
                            placeholder="xyz_abc123"
                            inputprops={{ tabIndex: "3" }}
                            {...register('username', { required: true, maxLength: 20, minLength: 4 })}
                            error={!!errors?.username}
                            helpertext={errors?.username ? errors.username.message : null}
                            value={values.username}
                            onChange={handleChange('username')}
                        />
                        {/* <TextField
                            disabled

                            id="rol"
                            label="Role"
                            value={worker.getWorker.role}
                            className={classes1.allfield}
                            sx={{ marginTop: 1 }}
                        /> */}
                        <TextField
                            className={classes1.allfield}
                            sx={{ marginTop: 1 }}
                            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}

                            id="mobileNo"
                            label="Mobile No."
                            placeholder="1234567892"
                            {...register('mobileNo', { required: true, maxLength: 10 })}
                            error={!!errors?.mobileNo}
                            helpertext={errors?.mobileNo ? errors.mobileNo.message : null}
                            value={values.mobileNo}
                            onChange={handleChange('mobileNo')}
                        />
                        <TextField
                            className={classes1.allfield}
                            sx={{ marginTop: 1 }}

                            id="shortIntro"
                            label="Short Intro"
                            placeholder="xyz abc"

                            {...register('shortIntro', { required: true, maxLength: 50 })}
                            error={!!errors?.shortIntro}
                            helpertext={errors?.shortIntro ? errors.shortIntro.message : null}
                            value={values.short_intro}
                            onChange={handleChange('short_intro')}
                        />
                        <TextField
                            className={classes1.allfield}
                            sx={{ marginTop: 1 }}

                            id="address"
                            label="Address"
                            placeholder="xyz abc"

                            {...register('Address', { required: true, maxLength: 100 })}
                            error={!!errors?.Address}
                            helpertext={errors?.Address ? errors.Address.message : null}
                            value={values.address}
                            onChange={handleChange('address')}
                        />

                        <TextField
                            className={classes1.allfield}
                            sx={{ marginTop: 1 }}
                            id="profileImage"
                            label="Profile Image"
                            placeholder='Upload File'
                            type="file"
                            accept="image/*"

                            {...register('profileImage', { required: true })}
                            error={!!errors?.profileImage}
                            helpertext={errors?.profileImage ? errors.profileImage.message : null}
                            value={values.profile_image}
                            onChange={handleChange('profile_image')}>
                        </TextField>
                        <TextField
                            className={classes1.allfield}
                            sx={{ marginTop: 1 }}
                            required
                            multiline
                            size='medium'
                            id="location"
                            label="Location"
                            placeholder="xyz"

                            {...register('location', { required: true, maxLength: 100 })}
                            error={!!errors?.location}
                            helpertext={errors?.location ? errors.location.message : null}
                            value={values.location}
                            onChange={handleChange('location')}
                        />
                        <TextField
                            className={classes1.allfield}
                            sx={{ marginTop: 1 }}
                            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}

                            id="workerid"
                            label="workerid"

                            {...register('workerid', { required: true, maxLength: 10 })}
                            error={!!errors?.workerid}
                            helpertext={errors?.workerid ? errors.workerid.message : null}
                            value={values.worker}
                            onChange={handleChange('worker')}
                        />
                        <div className={classes.button}>
                            <Button
                                variant="contained"
                                className={classes1.root4}
                                onClick={handleSubmit(onSubmit)}
                                sx={{
                                    marginTop: 0.5,
                                    marginRight: -34,
                                    color: 'black',
                                }}>
                                Submit</Button>
                        </div>
                    </div>

                </CardContent>
            </Card>
        </Container>
    );

};
export default EditProfileWorker;

{/* <TextField
                                disabled
                                id="supplier-one-to-one"
                                label="Supplier"
                            // defaultValue={username}
                            />
                            <TextField
                                required
                                multiline
                                size='medium'
                                id="first-name"
                                label="Name"
                                placeholder="xyz abc"
                            />
                            <TextField
                                required
                                multiline
                                size='medium'
                                id="email-id"
                                label="Email Address"
                                placeholder="xyz@abc.com"
                            />
                            <TextField
                                required
                                multiline
                                size='medium'
                                id="username"
                                label="UserName"
                                placeholder="xyz_abc123"
                            /> */}