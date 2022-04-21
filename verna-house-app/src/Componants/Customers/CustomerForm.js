
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

import { useLocation } from "react-router-dom";
import InputAdornment from '@mui/material/InputAdornment';
import { useDispatch } from 'react-redux';
import { makeStyles } from "@material-ui/core/styles";
import { getRegisterData } from '../../Store/Register/RegisterAction';
// import { getCustomers } from '../../Store/Supplier/SupplierAction';
import { useForm } from 'react-hook-form';
import UploadButton from '../UploadButton';
import { FormControl, OutlinedInput } from '@mui/material';
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

const CustomerForm = props => {
    const state = useLocation().state
    const dispatch = useDispatch()
    // console.log(state)

    const classes1 = useStyles();
    const navigate = useNavigate()

    const goBackHandler = () => {
        navigate("/Registration")
    }
    // const a = [state.fullname, state.username, state.email]

    const [values, setValues] = React.useState({
        'mobileNo': "",
        "companyName": '',
        "companyAddress": '',
        "profileImageCustomer": null,
        "locationCustomer": '',
        "scocialWebsite": "",
    });

    const handleChange = (prop) => (event) => {

        console.log(prop)
        // if (prop !== "picture") {
        console.log(event.target.files[0])
        setValues({ ...values, [prop]: event.target.value });
        // }
        // else {
        //     console.log(event.target.files[0])
        //     setValues({
        //         ...values,
        //         [prop]: event.target.files[0],
        //     });
        // }



        // setValues({ ...values, [prop]: event.target.value });
    };
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        // const data1 = a.push(data)
        console.log(JSON.stringify(data, null, 2));
        dispatch(getRegisterData({ data: state }));
        // dispatch(getCustomers({ data: data1 }));
    }

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
                    <Typography variant="h4" component='div' fontSize='26px' className={classes.registration}>Customer Profile</Typography>

                    <div className={classes1.root5}>

                        <TextField
                            className={classes1.allfield}
                            sx={{ marginTop: 1 }}
                            multiline
                            size='medium'
                            id="role"
                            label="Role"
                            defaultValue={state.role}
                        />
                        <TextField
                            className={classes1.allfield}
                            sx={{ marginTop: 1 }}
                            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                            required
                            multiline
                            size='medium'
                            id="mobileNoCustomer"
                            label="Mobile No."
                            placeholder="1234567892"
                            {...register('mobileNoCustomer', { required: true, maxLength: 10 })}
                            error={!!errors?.mobileNoCustomer}
                            helpertext={errors?.mobileNoCustomer ? errors.mobileNoCustomer.message : null}
                            onChange={handleChange('mobileNo')}
                        />
                        <TextField
                            className={classes1.allfield}
                            sx={{ marginTop: 1 }}
                            required
                            multiline
                            size='medium'
                            id="companyName"
                            label="Company Name"
                            placeholder="xyz abc"
                            onChange={handleChange('companyName')}
                            {...register('companyName', { required: true, maxLength: 20 })}
                            error={!!errors?.companyName}
                            helpertext={errors?.companyName ? errors.companyName.message : null}
                        />
                        <TextField
                            className={classes1.allfield}
                            sx={{ marginTop: 1 }}
                            required
                            multiline
                            size='medium'
                            id="companyAddress"
                            label="Company Address"
                            placeholder="xyz abc"
                            onChange={handleChange('companyAddress')}
                            {...register('companyAddress', { required: true, maxLength: 100 })}
                            error={!!errors?.companyAddress}
                            helpertext={errors?.companyAddress ? errors.companyAddress.message : null}
                        />
                        {/* <FormControl required sx={{ m: 1, width: '40ch' }} variant="outlined" >
                                <InputLabel htmlFor="outlined-adornment-password" >Profile Image</InputLabel>
                                <OutlinedInput
                                    id="profile-image-agency"
                                    label="Profile Image"
                                    placeholder='Upload File'
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <UploadButton />
                                        </InputAdornment>
                                    }>
                                </OutlinedInput>
                            </FormControl> */}

                        <TextField
                            className={classes1.allfield}
                            sx={{ marginTop: 1 }}
                            id="profileImageCustomer"
                            label="Profile Image Customer"
                            placeholder='Upload File'
                            type="file"
                            accept="image/*"
                            ref={register}
                            // value = { values.profileImageCustomer}
                            // InputProps={{
                            //     endAdornment: (
                            //         <InputAdornment position="end">
                            //             <UploadButton className={classes1.root1} />
                            //         </InputAdornment>
                            //     ),
                            // }}
                            inputlabelprops={{
                                shrink: true,
                            }}
                            variant="outlined"
                            onChange={handleChange}
                            {...register('profileImageCustomer', { required: true })}
                            error={!!errors?.profileImageCustomer}
                            helpertext={errors?.profileImageCustomer ? errors.profileImageCustomer.message : null}>
                        </TextField>
                        <TextField
                            className={classes1.allfield}
                            sx={{ marginTop: 1 }}
                            required
                            multiline
                            size='medium'
                            id="locationCustomer"
                            label="Location"
                            placeholder="xyz"
                            onChange={handleChange}
                            {...register('locationCustomer', { required: true, maxLength: 100 })}
                            error={!!errors?.locationCustomer}
                            helpertext={errors?.locationCustomer ? errors.locationCustomer.message : null}
                        />
                        <TextField
                            className={classes1.allfield}
                            sx={{ marginTop: 1 }}
                            multiline
                            required
                            size='medium'
                            id="socialWebsite"
                            label="Social Website"
                            placeholder="http://xyz.com"
                            onChange={handleChange}
                            {...register('socialWebsite', { required: false })}
                            error={!!errors?.socialWebsite}
                            helpertext={errors?.socialWebsite ? errors.socialWebsite.message : null}
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
        </Container >
    );

};
export default CustomerForm;

//  <TextField
//                             disabled
//                             id="customer-one-to-one"
//                             label="Customer"
//                         // defaultValue={username}
//                         />
//                         <TextField
//                             required
//                             multiline
//                             size='medium'
//                             id="first-name"
//                             label="Name"
//                             placeholder="xyz abc"
//                         />
//                         <TextField
//                             required
//                             multiline
//                             size='medium'
//                             id="email-id"
//                             label="Email Address"
//                             placeholder="xyz@abc.com"
//                         />
//                         <TextField
//                             required
//                             multiline
//                             size='medium'
//                             id="username"
//                             label="UserName"
//                             placeholder="xyz_abc123"
//                         />