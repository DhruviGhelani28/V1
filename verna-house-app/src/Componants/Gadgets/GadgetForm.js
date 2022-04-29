
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useLocation } from "react-router-dom";
import { useForm, Controller } from 'react-hook-form';
import { Grid } from "@mui/material";
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
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import { useDispatch } from "react-redux";
import MenuItem from '@mui/material/MenuItem';
import { addGadget } from "../../Store/Gadget/GadgetAction";

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

const GadgetForm = (props) => {
    const state = useLocation().state
    const dispatch = useDispatch()
    // console.log(state)

    const classes1 = useStyles();
    const navigate = useNavigate()

    // const goBackHandler = () => {
    //     navigate("/Gadgets")
    // };
    const [values, setValues] = React.useState(
        {
            gadgetName: "",
            gadgetImage: "",
            price: '',
            orderStatus: '',
            timeDuration: '',
        }
    );
    const handleChange = (prop) => (event) => {

        console.log(prop)

        setValues({ ...values, [prop]: event.target.value });
        if (prop == "gadgetImage") {
            console.log(event.target.files[0])
            setValues({ ...values, gadgetImage: event.target.files[0].name });
        }

    };

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {

        console.log(values)
        console.log(JSON.stringify(data, null, 2));
        dispatch(addGadget({ values }))


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
                    <IconButton sx={{ marginLeft: 1, }} onClick={props.onClick}>
                        <ChevronLeftIcon />
                    </IconButton>
                </CardActions>
                <CardContent>
                    <Typography variant="h4" component='div' fontSize='26px' className={classes.registration}>Add Gadget</Typography>
                    <Grid container component="div" spacing={0} className={classes1.root5}>

                        <Grid item xs={12}>
                            <TextField
                                className={classes1.allfield}
                                sx={{ marginTop: 1 }}
                                // ref={register}
                                required
                                size='medium'
                                id="gadgetName"
                                label="Gadget Name"

                                {...register('gadgetName', { required: true, maxLength: 200 })}
                                error={!!errors?.gadgetName}
                                helpertext={errors?.gadgetName ? errors.gadgetName.message : null}
                                onChange={handleChange('gadgetName')}
                            />

                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                className={classes1.allfield}
                                sx={{ marginTop: 1 }}
                                required
                                size='medium'
                                id="gadgetImage"
                                label="Gadget Image"
                                type="file"
                                accept="image/png image/jpeg"
                                {...register('gadgetImage', { required: true })}
                                error={!!errors?.gadgetImage}
                                helpertext={errors?.gadgetImage ? errors.gadgetImage.message : null}
                                onChange={handleChange('gadgetImage')}
                            >
                            </TextField>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                className={classes1.allfield}
                                sx={{ marginTop: 1 }}
                                // ref={register}

                                required
                                size='medium'
                                id="price"
                                label="Price"
                                placeholder="1234567892"
                                {...register('price', { required: true, maxLength: 10 })}
                                error={!!errors?.price}
                                helpertext={errors?.price ? errors.price.message : null}
                                onChange={handleChange('price')}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl
                                sx={{ marginTop: 1, width: '40ch' }}
                                className={classes1.allfield}>
                                <InputLabel id="order-id">Order Status</InputLabel>
                                <Select
                                    // onChange={(event) => {
                                    //     console.log(event.target.value)
                                    //     setValues((prevStatus) => { return { ...prevStatus, orderStatus: event.target.value } })
                                    // }}
                                    sx={{ textAlign: 'left' }}
                                    id="orderStatus"
                                    label="Order Status"
                                    defaultValue=""

                                    {...register('orderStatus', { required: true })}
                                    error={!!errors?.orderStatus}
                                    helpertext={errors?.orderStatus ? errors.orderStatus.message : null}

                                    onChange={handleChange('orderStatus')}

                                >
                                    {OrderStatus.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}{option.value}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                // ref={register}
                                className={classes1.allfield}
                                sx={{ marginTop: 1 }}
                                id="timeDuration"
                                label="TimeDuration"
                                placeholder="1 to 365 in days"
                                // {...register('timeDuration')}
                                error={!!errors?.timeDuration}
                                helpertext={errors?.timeDuration ? errors.timeDuration.message : null}
                                onChange={handleChange('timeDuration')}
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
export default GadgetForm;