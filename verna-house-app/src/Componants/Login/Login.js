import React, { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import PeopleIcon from '@mui/icons-material/People';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
// import { Container } from "@mui/material";
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
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import FormHelperText from '@mui/material/FormHelperText';
import { useDispatch, useSelector } from "react-redux";
import { getLoginData } from "../../Store/Register/RegisterAction";
import { useForm } from "react-hook-form";
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
];

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

    const onSubmit = ( data) => {
        // e.preventDefault();
        console.log(JSON.stringify(data, null, 2));

        dispatch(getLoginData({ data: data }));
        navigateHome("/Home");
    };
  
    const classes1 = useStyles();
    const navigate = useNavigate()
    const navigate1 = useNavigate();
    const goBackHandler = () => {
        navigate1("/Home")
    }
    const changePasswordHandler = () => {
        navigate("/ChangePassword")
    }

    const { register, handleSubmit, formState: { errors } } = useForm();
    // sx={{ maxWidth: 500, maxHeight: 4000, borderRadius: 5, borderColor: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)', paddingTop: 1, marginTop: 3, margin: "center" }}
    return (
        <div>
            <Card variant="outlined" className={classes1.root} sx={{ borderColor: '#EC255A', borderWidth: 1, borderRadius: 5, marginTop: 10 }}>
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
                            sx={{ width: 56, height: 56, borderColor: 'action.home' }}
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
                    // onSubmit={submitLoginForm}
                    >
                        <Grid container spacing={1}>
                            <Grid item xs={12}>
                                <AccountCircle sx={{ color: 'action.home', mr: 1, my: 0.5, position: 'relative', marginTop: 3, marginRight: -0.3 }} />
                                <TextField
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
                                    {...register('email', { required: true })}
                                    error={errors.email ? true : false}
                                />

                            </Grid>
                            <Grid item xs={12}>
                                <PeopleIcon sx={{ color: 'action.home', mr: 1, my: 0.5, position: 'relative', marginTop: 3, marginRight: -0.3 }} />
                                <FormControl required sx={{ m: 1, width: '40ch' }} >
                                    <InputLabel id="roll-id">Roll</InputLabel>
                                    <Select
                                        sx={{ textAlign: 'left' }}
                                        labelId="demo-simple-select-label"
                                        id="roll"
                                        label="Roll"
                                        // value={roll}
                                        onChange={handleChange}
                                        defaultValue=""
                                        {...register('roll', { required: true })}
                                        error={errors.roll ? true : false}
                                    >
                                        {Rolls.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                    <FormHelperText>Please select your roll in system.</FormHelperText>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} >
                                <img width="23" src={key} className={classes.marginTop} alt="key"></img>
                                <TextField
                                    className={classes1.root2}
                                    required
                                    id="password"
                                    label="Enter Password"
                                    type="password"
                                    placeholder="*******"
                                    autoComplete="current-password"
                                    onChange={handleChange}
                                    {...register('password', {
                                        required: true,
                                        // validate: {
                                        //     positive: v => parseInt(v) > 0 || 'Should be greater than 0',
                                        //     lessThanTen: v => parseInt(v) >= 6 || 'Should be lower than 10',
                                            
                                        // }
                                    })}
                                    error={errors.password ? true : false}
                                />

                            </Grid>
                            <Grid item xs={12} className={classes.button}>
                                <Button
                                    className={classes1.root4}
                                    variant="contained"
                                    onClick={handleSubmit(onSubmit)}
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