

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import TextField from '@mui/material/TextField';
import React, { useEffect } from "react";
import Button from '@mui/material/Button';
import classes from '../Login.module.css';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
import { Container, FormControl } from '@mui/material';
import { useDispatch } from "react-redux";
import { getLoginData } from "../../Store/Register/RegisterAction";
import { useForm } from "react-hook-form";
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Grid from '@mui/material/Grid';
import { useRef } from 'react';
import { OutlinedInput, InputLabel } from '@mui/material';
import UploadButton from '../UploadButton';
import InputAdornment from '@mui/material/InputAdornment';
import { Input } from '@mui/material';
import { useState } from 'react';
import { Select } from '@mui/material';
import { MenuItem } from '@mui/material';
const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg, #F3C5C5 30%, #FFE3E3 50%,#F3C5C5 30%,#FFE3E3 50%)',
        color: 'action.home',
        maxWidth: 500,
        maxHeight: 4000,
        paddingTop: 1,
        marginTop: 30,
        margin: "center",
    },
    root1: {
        color: '#121212',
        '&:hover': {
            color: '#EC255A',
        }
    },
    root2: {
        '&:onClick': {
            color: '#121212',
        },
        color: '#EC255A',
        '&:hover': {
            color: '#121212',
        },
        '&:active': {
            color: '#EC255A',
        }
    },
    root3: {
        color: '#EC255A',
        '&:hover': {
            color: '#121212',
        }
    },
    root4:
    {
        background: 'linear-gradient(45deg, #FFE3E3 25%, #F3C5C5 80%)',

    },
    allfield:
    {
        width: '40ch',
        marginTop: '10ch',
        background: 'linear-gradient(45deg, #FFE3E3 25%, #F3C5C5 80%)',
        color: 'action.home',
    }
});

const styles = {
    hidden: {
        display: "none",
    },
    importLabel: {
        color: "black",
    },
};
// const Input = styled('input')({
//     display: 'none',
// });

const OrderStatus = [
    {
        value: 'Available',
        label: 'Available',
    },
    {
        value: 'Pending',
        label: 'Pending',
    },
    {
        value: 'Purchased',
        label: 'Purchased',
    },
]
const PhotoPosterForm = props => {

    const uploadInputRef = useRef(null);
    const dispatch = useDispatch();
    const navigateHome = useNavigate();
    const classes1 = useStyles();
    const navigate = useNavigate()

    const [values, setValues] = React.useState({
        category: "",
        picture: null,
        name: "",
        orderStatus: "",
        timeDuration: "",
    });
    const onFileHandler = (e) => {
        console.log(e.target.files[0])
        // setFile(e.target.files[0])
        setValues({
            ...values,
            picture: e.target.files[0],
        });
    };

    // console.log(values)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const handleChange = (prop) => (event) => {
        // const { name, value } = e.target;
        // console.log(name, value)
        console.log(prop)
        if (prop !== "picture") {
            setValues({ ...values, [prop]: event.target.value });
        }
        else {
            console.log(event.target.files[0])
            setValues({
                ...values,
                [prop]: event.target.files[0],
            });
        }


    };
    const onSubmit = (data) => {
        console.log(JSON.stringify(data, null, 2));

        // setValues(
        //     {
        //         Category: "",
        //         picture: null,
        //         name: "",
        //         orderStatus: "",
        //         timeDuration: "",
        //     }
        // )
    }

    const formSubmit = (e) => {
        e.preventDefault();

        const formdata = new FormData();
        formdata.append("Category", values.Category)
        formdata.append("picture", values.picture.name)
        console.log(values.Category)
        console.log(values.picture.name)
        // console.log(formdata)
        const config = {
            headers: {
                'content-type': "multipart/formdata",
            },
        }
    }

    // console.log(values)
    useEffect(() => {
        const body = document.querySelector("body");
        body.style.overflow = props.open ? "hidden" : "auto";
    }, [props.open])
    return (
        <Container align="center" >
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
            >
                <CardActions>
                    <IconButton sx={{ marginLeft: 1, }} onClick={props.onClick}>
                        <ChevronLeftIcon />
                    </IconButton>
                </CardActions>
                <CardContent>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h4 >Add Photos/Posters</h4>
                        <Grid container spacing={0}>
                            <Grid item xs={12}>
                                <TextField
                                    sx={{ marginTop: 1 }}
                                    className={classes1.allfield}
                                    required
                                    size='medium'
                                    id="category"
                                    label="Enter Category"
                                    placeholder="xyz_abc123"
                                    onChange={handleChange("category")}
                                    inputprops={{ tabIndex: "3" }}
                                    {...register('category', { required: true, maxLength: 20, minLength: 4 })}
                                    error={!!errors?.category}
                                    helpertext={errors?.category ? errors.category.message : null}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl>
                                    <InputLabel id="label-picture">Upload</InputLabel>
                                    <OutlinedInput
                                        required
                                        className={classes1.allfield}
                                        sx={{ marginTop: 1 }}
                                        label="Upload"
                                        id='picture'
                                        inputlabelprops={{
                                            'shrink': true,
                                        }}
                                        defaultValue=""
                                        onChange={handleChange("picture")}
                                        type="file"
                                        accept="image/*"
                                        {...register('picture', { required: true })}
                                        error={!!errors?.picture}
                                        helpertext={errors?.picture ? errors.picture.message : null}
                                    // onChange={handleChange('name')}
                                    >

                                        {/* <Input

                                            style={styles.hidden}
                                            required
                                            accept="image/*"
                                            type="file"
                                            inputlabelprops={{
                                                shrink: true
                                            }}
                                            id="picture"
                                            label="Upload "
                                            onChange={onFileHandler}> */}

                                    </OutlinedInput>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    className={classes1.allfield}
                                    sx={{ marginTop: 1 }}
                                    size='medium'
                                    id="name"
                                    label="Name"
                                    {...register('name', { required: true, maxLength: 20, minLength: 4 })}
                                    error={!!errors?.name}
                                    helpertext={errors?.name ? errors.name.message : null}
                                    onChange={handleChange('name')}
                                /></Grid>
                            <Grid item xs={12}>
                                <FormControl
                                    required sx={{ marginTop: 1, width: '40ch' }}
                                    className={classes1.allfield}
                                // inputprops={{ tabIndex: "6" }}
                                >
                                    {/* {
                                console.log("vvvv", getFieldState("roll"))
                            } */}
                                    <InputLabel id="order-id">Order Status</InputLabel>
                                    <Select
                                        onChange={handleChange('orderStatus')}
                                        sx={{ textAlign: 'left' }}
                                        id="orderStatus"
                                        label="Order Status"
                                        {...register('orderStatus', { required: true })}
                                        error={!!errors?.orderStatus}
                                        helpertext={errors?.orderStatus ? errors.orderStatus.message : null}
                                        defaultValue=""

                                    >
                                        {OrderStatus.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </Select>

                                    {/* <FormHelperText>Please select your role in system.</FormHelperText> */}
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    className={classes1.allfield}
                                    sx={{ marginTop: 1 }}
                                    required
                                    size='medium'
                                    id="timeDuration"
                                    label="TimeDuration"
                                    placeholder="1 to 365 in days"
                                    {...register('timeDuration', { required: true, maxLength: 365, minLength: 1 })}
                                    error={!!errors?.timeDuration}
                                    helpertext={errors?.timeDuration ? errors.timeDuration.message : null}
                                    onChange={handleChange('timeDuration')}
                                />
                            </Grid>
                            <Grid item xs={12} className={classes.button}>
                                <Button
                                    className={classes1.root4}
                                    variant="contained"
                                    type="submit"
                                    onClick={handleSubmit(onSubmit)}
                                    sx={{
                                        marginTop: 0.5,
                                        marginRight: -38.5,
                                        color: 'black',
                                    }}>
                                    Sign In</Button>
                            </Grid>
                        </Grid>
                        {/* </Box> */}
                    </form>
                </CardContent>
            </Card>
        </Container >
    );

};
export default PhotoPosterForm;
