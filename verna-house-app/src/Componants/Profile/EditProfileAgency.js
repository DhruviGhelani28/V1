import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
// import getAgency
import { Card, Grid, TextField, Button } from "@mui/material";
import { useForm } from 'react-hook-form';
import classes from "../Login.module.css";

const useStyles = makeStyles({
    root1: {
        color: '#121212',
        '&:hover': {
            color: '#EC255A',
        }
    },
    root4:
    {
        // background: 'linear-gradient(45deg, #575758  25%, #2F3031 80%)',
        color: '#fff',
    },
    root5:
    {
        marginTop: 30,
    },
    allfield:
    {
        width: '30ch',
        marginTop: '10ch',
        // background: 'linear-gradient(45deg, #575758  25%, #2F3031 80%)',
        color: '#fff',
    }
});
const EditProfileAgency = (props) => {
    const classes1 = useStyles()
    const dispatch = useDispatch()
    const agencyId = props.agencyId
    console.log(agencyId)
    const agency = useSelector((state) => state.agency)

    useEffect(() => {
        dispatch(getSupplier({ id: agencyId }))
    }, [dispatch])

    // console.log(supplier.getSupplier)

    const [values, setValues] = React.useState({
        fullname: '',
        email: '',
        username: '',
        mobileNo: '',
        organizationName: '',
        organizationAddress: '',
        profileImage: ``,
        location: '',
        socialWebsite: '',
    });

    useEffect(() => {
        setValues({
            fullname: supplier.getSupplier?.name,
            email: supplier.getSupplier?.email,
            username: supplier.getSupplier?.username,
            mobileNo: supplier.getSupplier?.mobileNo,
            organizationName: supplier.getSupplier?.organisationName,
            organizationAddress: supplier.getSupplier?.organisationAddress,
            profileImage: `${supplier.getSupplier?.profile_image}`,
            location: supplier.getSupplier?.location,
            socialWebsite: supplier.getSupplier?.social_website,
        });
    }, [agency])

    const handleChange = (prop) => (event) => {
        console.log(prop)
        setValues({ ...values, [prop]: event.target.value });
        if (prop == "profileImage") {
            console.log(event.target.files)
            setValues({ ...values, profileImage: event.target.files[0].name });
        }
    };
    const { register, formState: { errors } } = useForm();
    const onSubmit = () => {
        console.log(values)
        // dispatch(editSupplier({ values: values }, supplierId))
        props.setReload(true)
    }

    return (
        <>
            <Card component="form" sx={{ height: 450, width: 590, padding: 1, background: 'linear-gradient(45deg, #575758  25%, #2F3031 80%)' }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6}>
                        <TextField
                            sx={{ marginTop: 2 }}
                            className={classes1.allfield}
                            required
                            color="primary"

                            id="fullname"
                            label="Enter Your Name"
                            placeholder="xyz abc"
                            {...register('fullname', { required: true, maxLength: 20, minLength: 4 })}
                            error={!!errors?.fullname}

                            value={values?.fullname}
                            onChange={handleChange('fullname')}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            sx={{ marginTop: 2 }}
                            className={classes1.allfield}
                            required

                            id="email"
                            label="Enter Your Email Address"
                            placeholder="xyz@abc.com"

                            {...register('email', {
                                required: true, pattern: {
                                    value: /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/i,
                                    message: "Invalid Email Address",
                                },
                            })}
                            error={!!errors?.email}

                            value={values?.email}
                            onChange={handleChange('email')}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            sx={{ marginTop: 1 }}
                            className={classes1.allfield}
                            required

                            id="username"
                            label="Enter Your UserName"
                            placeholder="xyz_abc123"

                            {...register('username', { required: true, maxLength: 20, minLength: 4 })}
                            error={!!errors?.username}

                            value={values?.username}
                            onChange={handleChange('username')}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            className={classes1.allfield}
                            sx={{ marginTop: 1 }}
                            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                            required
                            id="mobileNo"
                            label="Mobile No."
                            placeholder="1234567892"

                            {...register('mobileNo', { required: true, maxLength: 10 })}
                            error={!!errors?.mobileNo}

                            value={values?.mobileNo}
                            onChange={handleChange('mobileNo')}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            className={classes1.allfield}
                            sx={{ marginTop: 1 }}
                            required

                            id="organisationName"
                            label="Organisation Name"
                            placeholder="xyz abc"

                            {...register('organizationName', { required: true, maxLength: 20 })}
                            error={!!errors?.organizationName}

                            value={values?.organizationName}
                            onChange={handleChange('organizationName')}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            className={classes1.allfield}
                            sx={{ marginTop: 1 }}
                            required

                            id="organisationAddress"
                            label="Organisation Address"
                            placeholder="xyz abc"

                            {...register('organizationAddress', { required: true, maxLength: 100 })}
                            error={!!errors?.organizationAddress}

                            value={values?.organizationAddress}
                            onChange={handleChange('organizationAddress')}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <label style={{ border: '1px solid white', borderRadius: 5, color: 'white', fontSize: 15 }}>
                            <input type={'file'} onChange={handleChange('profileImage')} />
                            <label>{values?.profileImage}</label>
                        </label>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            className={classes1.allfield}
                            sx={{ marginTop: 1 }}
                            required

                            id="location"
                            label="Location"
                            placeholder="xyz"

                            {...register('location', { required: true, maxLength: 100 })}
                            error={!!errors?.location}

                            value={values?.location}
                            onChange={handleChange('location')}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            className={classes1.allfield}
                            sx={{ marginTop: 1 }}
                            required

                            id="social-website"
                            label="Social Website"
                            placeholder="http://xyz.com"

                            {...register('socialWebsite', { required: false })}
                            error={!!errors?.socialWebsite}

                            value={values?.socialWebsite}
                            onChange={handleChange('socialWebsite')}
                        />
                    </Grid>
                    <Grid item xs={12}>

                        <Grid container rowSpacing={2} alignItems='center' justifyContent='flex-end'>
                            <Grid item xs={3}>
                                <Button
                                    variant="contained"
                                    className={classes1.root4}
                                    onClick={handleSubmit(onSubmit)}
                                    sx={{
                                        marginTop: 0.5,
                                        color: 'black',
                                        marginRight: 0,
                                    }}>
                                    Save</Button>
                            </Grid>
                            <Grid item xs={3}>
                                <Button
                                    variant="contained"
                                    className={classes1.root4}
                                    // onClick={handleSubmit(onSubmit)}
                                    sx={{
                                        marginTop: 0.5,
                                        // marginLeft: 3,
                                        // marginRight: 2,
                                        color: 'black',
                                    }}>
                                    Cancle</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Card>
        </>
    );
};
export default EditProfileAgency;