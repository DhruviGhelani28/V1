import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { getSupplier } from "../../Store/Supplier/SupplierAction";
import { Card, Grid, TextField, Button } from "@mui/material";
import { useForm } from 'react-hook-form';
import classes from "../Login.module.css";
import { editSupplier } from "../../Store/Supplier/SupplierAction";
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
const EditProfileSupplier = (props) => {
    const classes1 = useStyles()
    const dispatch = useDispatch()
    const supplierId = props.supplierId
    console.log(supplierId)
    const supplier = useSelector((state) => state.supplier)

    useEffect(() => {
        dispatch(getSupplier({ id: supplierId }))
    }, [dispatch])

    console.log(supplier.getSupplier)

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
    }, [supplier])



    console.log(values)
    const handleChange = (prop) => (event) => {
        console.log(prop)
        setValues({ ...values, [prop]: event.target.value });
        if (prop == "profileImage") {
            console.log(event.target.files)
            // let path = { window.location.origin + `./${event.target.files[0].name}` }   
            // console.log(path)
            setValues({ ...values, profileImage: event.target.files[0].name });
        }
    };
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = () => {
        console.log(values)
        dispatch(editSupplier({ values: values }, supplierId))
        props.setReload(true)
    }


    return (
        <>
            <Card component="form" sx={{ height: 450, width: 590, padding: 1, background: 'linear-gradient(45deg, #575758  25%, #2F3031 80%)' }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6}>
                        <TextField
                            // inputProps={{ borderColor: '#fff' }}
                            sx={{ marginTop: 2 }}
                            className={classes1.allfield}
                            required
                            color="primary"

                            id="fullname"
                            label="Enter Your Name"
                            placeholder="xyz abc"
                            {...register('fullname', { required: true, maxLength: 20, minLength: 4 })}
                            error={!!errors?.fullname}
                            helpertext={errors?.fullname ? errors.fullname.message : null}
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
                            helpertext={errors?.email ? errors.email.message : null}
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
                            helpertext={errors?.username ? errors.username.message : null}
                            value={values?.username}
                            onChange={handleChange('username')}
                        />
                    </Grid>
                    <Grid item xs={6}>
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
                            helpertext={errors?.organizationName ? errors.organizationName.message : null}
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
                            helpertext={errors?.organizationAddress ? errors.organizationAddress.message : null}
                            value={values?.organizationAddress}
                            onChange={handleChange('organizationAddress')}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        {/* <img src={`http://localhost:8000/images/profiles/04b5d219-c12f-40e4-a4cc-2881a03b2525.jpeg`}></img> */}
                        {/* <TextField
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
                            // value={values?.profile_image ? `http://127.0.0.1:8000${values?.profile_image}` : ''}
                            // ref={register}
                            // gfgdgdg={`http://localhost:8000/images/profiles/04b5d219-c12f-40e4-a4cc-2881a03b2525.jpeg`}
                            onChange={handleChange('profileImage')}
                        >
                        </TextField> */}
                        {/* <TextField
                            className={classes1.allfield}
                            sx={{ marginTop: 1 }}
                            id="profileImage"
                            placeholder='Upload File'
                            type="file"
                            accept="image/*"
                            label={values?.profile_image || ''}
                            {...register('profileImage', { required: true })}
                            error={!!errors?.profileImage}
                            helpertext={errors?.profileImage ? errors.profileImage.message : null}
                            onChange={handleChange('profileImage')}
                        > */}
                        {/* </TextField><label>{values?.profile_image || ''}</label> */}
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
                            helpertext={errors?.location ? errors.location.message : null}
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
                            helpertext={errors?.socialWebsite ? errors.socialWebsite.message : null}
                            value={values?.socialWebsite}
                            onChange={handleChange('socialWebsite')}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        {/* <div className={classes.button}> */}
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
                        {/* </div> */}
                    </Grid>

                </Grid>
            </Card>







        </>


    );
};
export default EditProfileSupplier;