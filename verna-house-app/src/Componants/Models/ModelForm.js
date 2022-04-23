import React from "react";
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
import { useDispatch } from 'react-redux';
import { makeStyles } from "@material-ui/core/styles";
import { getRegisterData } from '../../Store/Register/RegisterAction';
import { useLocation } from "react-router-dom";
import { useForm, Controller } from 'react-hook-form';
import { Grid } from "@mui/material";
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

const ModelForm = () => {
    const state = useLocation().state
    const dispatch = useDispatch()
    // console.log(state)

    const classes1 = useStyles();
    const navigate = useNavigate()

    const goBackHandler = () => {
        navigate("/Registration")
    };
    const [values, setValues] = React.useState({
        mobileNo: "",
        address: '',
        background: '',
        profileImage: "",
        nativePlace: '',
        salary: "",
    });

    const handleChange = (prop) => (event) => {

        console.log(prop)
        // if (prop !== "picture") {
        // console.log(event.target.files[0])
        setValues({ ...values, [prop]: event.target.value });
        if (prop == "profileImage") {
            console.log(event.target.files[0])
            setValues({ ...values, profileImage: event.target.files[0].name });
        }
        // setValues({ ...values, [prop]: event.target.value });
    };
    // const onFileHandler = (event) => {
    //     setValues({ ...values, profileImage: event.target.files[0].name });
    // }
    // const handleChange = (prop) => (event) => {
    //     console.log(event.target.files[0])
    //     setValues({ ...values, [prop]: event.target.files[0] });
    // }
    const { register, handleSubmit, control, formState: { errors } } = useForm();
    const onSubmit = data => {
        // const data1 = a.push(data)
        // data.profileImage = event.ta
        console.log(values)
        console.log(JSON.stringify(data, null, 2));
        dispatch(getRegisterData({ data: state }));

    }
    console.log(register)
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
                    <IconButton sx={{ marginLeft: 1, }} onClick={goBackHandler}>
                        <ChevronLeftIcon />
                    </IconButton>
                </CardActions>
                <CardContent>
                    <Typography variant="h4" component='div' fontSize='26px' className={classes.registration}>Model Profile</Typography>

                    {/* <div className={classes1.root5}> */}
                    <Grid container component="div" spacing={0}>
                        <Grid item xs={12}>
                            <TextField
                                disabled
                                className={classes1.allfield}
                                sx={{ marginTop: 1 }}
                                multiline
                                size='medium'
                                id="role"
                                label="Role"
                                defaultValue={state.role}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                className={classes1.allfield}
                                sx={{ marginTop: 1 }}
                                // ref={register}
                                inputprops={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                                required
                                size='medium'
                                id="mobileNo"
                                label="Mobile No."
                                placeholder="1234567892"
                                {...register('mobileNo', { required: true, maxLength: 10 })}
                                error={!!errors?.mobileNo}
                                helpertext={errors?.mobileNo ? errors.mobileNo.message : null}
                                onChange={handleChange('mobileNo')}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                className={classes1.allfield}
                                sx={{ marginTop: 1 }}
                                // ref={register}
                                required
                                size='medium'
                                id="address"
                                label="Address"

                                {...register('address', { required: true, maxLength: 200 })}
                                error={!!errors?.address}
                                helpertext={errors?.address ? errors.address.message : null}
                                onChange={handleChange('address')}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                // ref={register}
                                className={classes1.allfield}
                                sx={{ marginTop: 1 }}
                                required
                                size='medium'
                                id="background"
                                label="Background History"

                                {...register('background', { required: true, maxLength: 2000 })}
                                error={!!errors?.background}
                                helpertext={errors?.background ? errors.background.message : null}
                                onChange={handleChange('background')}
                            />
                        </Grid>
                        <Grid item xs={12}>

                            <TextField
                                className={classes1.allfield}
                                sx={{ marginTop: 1 }}
                                required
                                size='medium'
                                id="profileImage"
                                label="Profile Image"
                                type="file"
                                accept="image/png image/jpeg"
                                // value={value}
                                // onChange={(e) => setValues((prevStatus) => { return { ...prevStatus, profileImage: e.target.files[0] } })}
                                // inputlabelprops={{
                                //     shrink: true,
                                // }}

                                // ref={register}
                                {...register('profileImage', { required: true })}
                                error={!!errors?.profileImage}
                                helpertext={errors?.profileImage ? errors.profileImage.message : null}
                                onChange={handleChange('profileImage')}
                            >
                            </TextField>

                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                className={classes1.allfield}
                                sx={{ marginTop: 1 }}
                                required
                                id="nativePlace"
                                label="Native Place"
                                // ref={register}

                                {...register('nativePlace', { required: true, maxLength: 50 })}
                                error={!!errors?.nativePlace}
                                helpertext={errors?.nativePlace ? errors.nativePlace.message : null}
                                onChange={handleChange('nativePlace')}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                // ref={register}
                                className={classes1.allfield}
                                sx={{ marginTop: 1 }}
                                id="salary"
                                label="Salary"

                                // {...register('salary')}
                                error={!!errors?.salary}
                                helpertext={errors?.salary ? errors.salary.message : null}
                                onChange={handleChange('salary')}
                            />
                        </Grid>
                        <Grid item xs={12} className={classes.button}>
                            {/* <div > */}
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
                        </Grid>
                        {/* </div> */}
                        {/* </div> */}
                    </Grid>
                </CardContent>
            </Card>
        </Container >
    );

};


export default ModelForm;