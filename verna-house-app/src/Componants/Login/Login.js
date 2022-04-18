import React, { useState } from "react";
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

import Grid from '@mui/material/Grid';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import key from "../../static/images/key.png";
import classes from '../Login.module.css';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";

import { useDispatch } from "react-redux";
import { getLoginData } from "../../Store/Register/RegisterAction";
import { useForm } from "react-hook-form";
import { Divider } from "@mui/material";


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


});

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        backgroundColor: '#44b700',
        
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: 'ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}));


const Login = props => {

    const dispatch = useDispatch();
    const navigateHome = useNavigate();
    const classes1 = useStyles();
    const navigate = useNavigate()
    const navigate1 = useNavigate();

    const [values, setValues] = useState({
        username: "",
        roll: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    };

    const onSubmit = (data) => {

        console.log(JSON.stringify(data, null, 2));
        console.log("sss", data);
        dispatch(getLoginData(data));
        // if (data.roll == 'Supplier') {
        //     
        // }
        navigateHome("/Home");

    };

    const goBackHandler = () => {
        navigate1("/Home")
    }
    const changePasswordHandler = () => {
        navigate("/ChangePassword")
    }

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };


    const { register, handleSubmit, formState: { errors } } = useForm();
    // sx={{ maxWidth: 500, maxHeight: 4000, borderRadius: 5, borderColor: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)', paddingTop: 1, marginTop: 3, margin: "center" }}
    return (
        <div className={classes.loginBack}>

            <Card variant="outlined" className={classes1.root} sx={{ borderColor: '#EC255A', borderWidth: 1, borderRadius: 5, marginTop: 0 }}>
                <CardActions >
                    <IconButton sx={{ marginLeft: 1, }} onClick={goBackHandler} className={classes1.root1}>
                        <ChevronLeftIcon className={classes1.root1} />
                    </IconButton>
                </CardActions>
                <CardContent>
                    <h2 >Sign In Here</h2>
                    <StyledBadge
                        overlap="circular"
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        variant="dot"
                    >
                        <Avatar
                            alt="Remy Sharp"
                            src="/src/static/images/avatar/female.png.jpg"
                            sx={{ width: 56, height: 56, borderWidth: 5, borderColor: "#121212" }}
                            position='sticky'
                        /></StyledBadge>

                    <Box
                        component="form"
                        sx={{
                            marginTop: 5,
                            '& .MuiTextField-root': { m: 1, width: '40ch' },
                            '& .MuiButton-root': { textColor: '#121212' },
                        }}
                        noValidate
                        autoComplete="off"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <Grid container spacing={1}>
                            <Grid item xs={12}>
                                <AccountCircle sx={{ color: 'action.home', mr: 1, my: 0.5, position: 'relative', marginTop: 3, marginRight: -0.3 }} />
                                {/* <TextField
                                    className={classes1.root5}
                                    sx={{
                                        color: 'action.home',
                                        borderColor: '#121212',
                                        '&:onFocus': {
                                            borderColor: '#121212',
                                        },
                                    }}
                                    required
                                    onChange={handleChange}
                                    id="email"
                                    label="Enter Your Email Address"
                                    placeholder="xyz@abc.com"
                                    // {...register('email', {
                                    //     required: true, pattern: {
                                    //         value: /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/i,
                                    //         message: "Invalid Email Address",
                                    //     },
                                    // })}
                                    error={!!errors?.email}
                                    helpertext={errors?.email ? errors.email.message : null}
                                /> */}
                                <TextField
                                    sx={{ marginTop: 1 }}
                                    className={classes1.allfield}
                                    required
                                    multiline
                                    size='medium'
                                    id="username"
                                    label="Enter Your UserName"
                                    placeholder="xyz_abc123"
                                    onChange={handleChange}
                                    inputprops={{ tabIndex: "3" }}
                                    {...register('username', { required: true, maxLength: 20, minLength: 4 })}
                                    error={!!errors?.username}
                                    helpertext={errors?.username ? errors.username.message : null}
                                />

                            </Grid>
                           
                            
                            {/* <Grid item xs={12}>
                                <PeopleIcon sx={{ color: 'action.home', mr: 1, my: 0.5, position: 'relative', marginTop: 3, marginRight: -0.3 }} />
                                <FormControl required sx={{ m: 1, width: '40ch' }} >
                                    <InputLabel id="roll-id">Roll</InputLabel>
                                    <Select
                                        sx={{ textAlign: 'left' }}
                                        labelId="demo-simple-select-label"
                                        id="roll"
                                        label="Roll"
                                        defaultValue=""
                                        onChange={handleChange}
                                        {...register('roll', { required: true })}
                                        error={!!errors?.roll}
                                        helpertext={errors?.roll ? errors.roll.message : null}
                                    >
                                        {Rolls.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                    <FormHelperText>Please select your roll in system.</FormHelperText>
                                </FormControl>
                            </Grid> */}
                            <Grid item xs={12} >
                                <img width="23" src={key} className={classes.marginTop} alt="key"></img>
                                <TextField
                                    required
                                    sx={{ marginTop: 1 }}
                                    className={classes1.root2}
                                    label="Enter Password"
                                    placeholder='*******'
                                    id="password"
                                    type={values.showPassword ? 'text' : 'password'}
                                    onChange={handleChange}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    className={classes1.root1}
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    edge="end"
                                                >
                                                    {values.showPassword ? <VisibilityOff className={classes1.root1} /> : <Visibility className={classes1.root1} />}
                                                </IconButton>
                                            </InputAdornment>
                                        )
                                    }}
                                    {...register('password', {
                                        required: true,
                                        pattern: {
                                            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/i,
                                            message: "The password must contain at least 1 lowercase, 1 uppercase alphabetical character, 1 numeric character & length should be 8 character or longer ",
                                        }
                                    }
                                    )}
                                    error={!!errors?.password}
                                    helpertext={errors?.password ? errors.password.message : null}
                                />

                            </Grid>
                            <Grid item xs={12} className={classes.button}>
                                <Button
                                    className={classes1.root4}
                                    variant="contained"
                                    type="submit"
                                    // onClick={onSubmit}
                                    sx={{
                                        marginTop: 0.5,
                                        marginRight: -38.5,
                                        color: 'black',
                                    }}>
                                    Sign In</Button>
                            </Grid>

                            <Grid item xs={12} className={classes.register}>
                                <Typography variant="body1" sx={{ marginTop: 0.5, marginLeft: -9, color: 'black', }}>
                                    Don't You Have An Account?
                                    <Link to={"/Registration"} className={classes1.root3}> Sign Up  </Link>
                                </Typography>
                                <Typography variant="body1" sx={{ marginTop: 0.5, marginLeft: -26, color: 'black', }}>
                                    <Link to={"/Registration"} className={classes1.root3}>Forgot Password?
                                    </Link>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={changePasswordHandler} sx={{ color: 'black' }}>Change Password</Button>
                </CardActions>
            </Card>
        </div>

    );

};
export default Login;

/*
<input
  {...register("test", {
    validate: value => value === '1' || 'error message'  // JS only: <p>error message</p> TS only support string
  })}
/>
// object of callback functions
<input
  {...register("test1", {
    validate: {
      positive: v => parseInt(v) > 0 || 'should be greater than 0',
      lessThanTen: v => parseInt(v) < 10 || 'should be lower than 10',
      // you can do asynchronous validation as well
      checkUrl: async () => await fetch() || 'error message',  // JS only: <p>error message</p> TS only support string
      messages: v => !v && ['test', 'test2']
    }
  })}
/>*/