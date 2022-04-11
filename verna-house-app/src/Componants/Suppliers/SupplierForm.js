
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
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import InputAdornment from '@mui/material/InputAdornment';
import { makeStyles } from "@material-ui/core/styles";
import { getRegisterData } from '../../Store/Register/RegisterAction';
import { getSuppliers } from '../../Store/Supplier/SupplierAction';
import UploadButton from '../UploadButton';
import { useForm } from 'react-hook-form';


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

const SupplierForm = props => {
    const navigate = useNavigate()
    const state = useLocation().state
    const dispatch = useDispatch()
    // console.log(state)
    const classes1 = useStyles();
    const goBackHandler = () => {
        navigate("/Registration")
    }

    // const a = [state.fullname, state.username, state.email]
    const [values, setValues] = React.useState({
        'mobileNo': "",
        "organizationName": '',
        "organizationAddress": '',
        "profileImageSupplier": '',
        "locationSupplier": '',
        "scocialWebsite": "",
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {

        // const data1 = a.push(data)

        console.log(JSON.stringify(data, null, 2));
        dispatch(getRegisterData({ data: state }));
        // dispatch(getAgencies({ data: data1 }));
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
                    <Typography variant="h4" component='div' fontSize='26px' className={classes.registration}>Supplier Profile</Typography>
                    {/* <Box
                        component="form"
                        sx={{
                            marginTop: 5,
                            marginLeft: 0,
                            '& .MuiTextField-root': { m: 1, width: '40ch', size: 'small' },
                            // '& .MuiButton-root': { marginRight:10 },
                        }}
                        noValidate
                        autoComplete="off"
                    > */}
                    <div className={classes1.root5}>
                       
                        <TextField
                            disabled
                            multiline
                            size='medium'
                            id="role"
                            label="Role"
                            defaultValue="Supplier"
                            className={classes1.allfield}
                            sx={{ marginTop: 1 }}
                        />
                        <TextField
                            className={classes1.allfield}
                            sx={{ marginTop: 1 }}
                            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                            required
                            multiline
                            size='medium'
                            id="mobileNo"
                            label="Mobile No."
                            placeholder="1234567892"
                            {...register('mobileNo', { required: true, maxLength: 10 })}
                            error={!!errors?.mobileNo}
                            helpertext={errors?.mobileNo ? errors.mobileNo.message : null}
                            onChange={handleChange}
                        />
                        <TextField
                            className={classes1.allfield}
                            sx={{ marginTop: 1 }}
                            required
                            multiline
                            size='medium'
                            id="organisationName"
                            label="Organisation Name"
                            placeholder="xyz abc"
                            onChange={handleChange}
                            {...register('organizationName', { required: true, maxLength: 20 })}
                            error={!!errors?.organizationName}
                            helpertext={errors?.organizationName ? errors.organizationName.message : null}
                        />
                        <TextField
                            className={classes1.allfield}
                            sx={{ marginTop: 1 }}
                            required
                            multiline
                            size='medium'
                            id="organisationAddress"
                            label="Organisation Address"
                            placeholder="xyz abc"
                            onChange={handleChange}
                            {...register('organizationAddress', { required: true, maxLength: 100 })}
                            error={!!errors?.organizationAddress}
                            helpertext={errors?.organizationAddress ? errors.organizationAddress.message : null}
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
                            id="profileImageSupplier"
                            label="Profile Image"
                            placeholder='Upload File'
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <UploadButton className={classes1.root1}/>
                                    </InputAdornment>
                                ),
                            }}
                            variant="outlined"
                            onChange={handleChange}
                            {...register('profileImageSupplier', { required: true })}
                            error={!!errors?.profileImageSupplier}
                            helpertext={errors?.profileImageSupplier ? errors.profileImageSupplier.message : null}>
                        </TextField>
                        <TextField
                            className={classes1.allfield}
                            sx={{ marginTop: 1 }}
                            required
                            multiline
                            size='medium'
                            id="locationSupplier"
                            label="Location"
                            placeholder="xyz"
                            onChange={handleChange}
                            {...register('locationSupplier', { required: true, maxLength: 100 })}
                            error={!!errors?.locationSupplier}
                            helpertext={errors?.locationSupplier ? errors.locationSupplier.message : null}
                        />
                        <TextField
                            className={classes1.allfield}
                            sx={{ marginTop: 1 }}
                            multiline
                            required
                            size='medium'
                            id="social-website"
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
                    {/* </Box> */}
                </CardContent>
            </Card>
        </Container>
    );

};
export default SupplierForm;

//  <TextField
                            
//                             disabled
//                             id="supplier-one-to-one"
//                             label="Supplier"
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