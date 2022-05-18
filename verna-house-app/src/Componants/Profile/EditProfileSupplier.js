import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { getSupplier } from "../../Store/Supplier/SupplierAction";
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
const EditProfileSupplier = (props) => {
    const classes1 = useStyles()
    const dispatch = useDispatch()
    const supplierId = props.supplierId
    console.log(supplierId)
    const supplier = useSelector((state) => state.supplier)

    const [data, setData] = useState({})

    useEffect(() => {
        dispatch(getSupplier({ id: supplierId }))
    }, [])

    useEffect(() => {
        setData(supplier.getSupplier)
    }, [supplier.getSupplier])

    console.log(supplier.getSupplier)
    console.log(data)
    // useEffect(() => {

    // },[data])

    // const [values, setValues] = React.useState({
    //     name: data.name,
    //     email: data.email,
    //     username: data.username,
    //     mobileNo: data.mobileNo,
    //     organizationName: data.organisationName,
    //     organizationAddress: data.organisationAddress,
    //     profileImage: `${data.profile_image}`,
    //     location: data.location,
    //     socialWebsite: data.social_website,
    // });
    // console.log(values)
    const handleChange = (prop) => (event) => {
        console.log(prop)
        setData({ ...data, [prop]: event.target.value });
        if (prop == "profile_image") {
            console.log(event.target.files[0])
            setData({ ...data, profile_image: event.target.files[0].name });
        }
    };
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        // const val = values
        // const data1 = { ...state, ...val }

        // dispatch(getRegisterData({ data: data1 }));
        // console.log("user registered supplier created")
        // navigate("/Login")
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
                            value={data?.name || ""}
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
                            value={data?.email || ''}
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
                            value={data?.username || ''}
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
                            value={data?.mobileNo || ''}
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
                            value={data?.organisationName || ''}
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
                            value={data?.organisationAddress || ''}
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
                            // value={data?.profile_image ? `http://127.0.0.1:8000${data?.profile_image}` : ''}
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
                            label={data?.profile_image || ''}
                            {...register('profileImage', { required: true })}
                            error={!!errors?.profileImage}
                            helpertext={errors?.profileImage ? errors.profileImage.message : null}
                            onChange={handleChange('profileImage')}
                        > */}
                        {/* </TextField><label>{data?.profile_image || ''}</label> */}
                        <label style={{ border: '1px solid white', borderRadius: 5, color: 'white', fontSize: 15 }}>
                            <input type={'file'} onChange={handleChange('profile_image')} />
                            <label>{data?.profile_image || ''}</label>
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
                            value={data?.location || ''}
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
                            value={data?.social_website || ''}
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