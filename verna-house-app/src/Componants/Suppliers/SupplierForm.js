
import React from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { useNavigate} from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import classes from '../Login.module.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

// import OutlinedInput from '@mui/material/OutlinedInput';
// import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';

// import FormControl from '@mui/material/FormControl';
// import { Select } from '@mui/material';
import UploadButton from '../UploadButton';
// import PhotoCamera from '@mui/icons-material/PhotoCamera';
// import userEvent from '@testing-library/user-event';


const SupplierForm = props => {
    const navigate = useNavigate()

    const goBackHandler = () => {
        navigate("/Home")
    }
    // let { registration } = useParams();

    // const [values, setValues] = React.useState({

    // });

    // const handleChange = (prop) => (event) => {
    //     setValues({ ...values, [prop]: event.target.value });
    // };

    // const handleClickShowPassword = () => {
    //     setValues({
    //         ...values,

    //     });
    // };

    // const handleMouseDownPassword = (event) => {
    //     event.preventDefault();
    // };

    // const [roll, setRoll] = React.useState(null);

    // const rollChangeHandler = (event) => {
    //     setRoll(event.target.value);
    // };


    return (
        <Container align="center">
            <Card variant="outlined" sx={{ maxWidth: 500, maxHeight: 8000, borderRadius: 5, borderColor: 'primary.main', paddingTop: 1, m: 1 }} margin="10px">
                <CardActions>
                    <IconButton sx={{ marginLeft: 1, }} onClick={goBackHandler}>
                        <ChevronLeftIcon />
                    </IconButton>
                </CardActions>
                <CardContent>
                    <Typography variant="h4" component='div' fontSize='26px' className={classes.registration}>Supplier Profile</Typography>
                    <Box
                        component="form"
                        sx={{
                            marginTop: 5,
                            marginLeft: 0,
                            '& .MuiTextField-root': { m: 1, width: '40ch', size: 'small' },
                            // '& .MuiButton-root': { marginRight:10 },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <div>
                            <TextField
                                disabled
                                id="supplier-one-to-one"
                                label="Supplier"
                            // defaultValue={username}
                            />
                            <TextField
                                required
                                multiline
                                size='medium'
                                id="first-name"
                                label="Name"
                                placeholder="xyz abc"
                            />
                            <TextField
                                required
                                multiline
                                size='medium'
                                id="email-id"
                                label="Email Address"
                                placeholder="xyz@abc.com"
                            />
                            <TextField
                                required
                                multiline
                                size='medium'
                                id="username"
                                label="UserName"
                                placeholder="xyz_abc123"
                            />
                            <TextField
                                disabled
                                multiline
                                size='medium'
                                id="roll-id-supplier"
                                label="Roll"
                                defaultValue="Supplier"
                            />
                            <TextField
                                inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                                required
                                multiline
                                size='medium'
                                id="mobile-no-supplier"
                                label="Mobile No."
                                placeholder="1234567892"
                            />
                            <TextField
                                required
                                multiline
                                size='medium'
                                id="organisation-name"
                                label="Organisation Name"
                                placeholder="xyz abc"
                            />
                            <TextField
                                required
                                multiline
                                size='medium'
                                id="organisation-address"
                                label="Organisation Address"
                                placeholder="xyz abc"
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
                                id="profile-image-supplier"
                                label="Profile Image"
                                placeholder='Upload File'
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <UploadButton />
                                        </InputAdornment>
                                    ),
                                }}
                                variant="outlined">
                            </TextField>
                            <TextField
                                required
                                multiline
                                size='medium'
                                id="location-supplier"
                                label="Location"
                                placeholder="xyz"
                            />
                            <TextField
                                multiline
                                required
                                size='medium'
                                id="social-website"
                                label="Social Website"
                                placeholder="http://xyz.com"
                            />
                            <div className={classes.button}>
                                <Button
                                    variant="contained"
                                    onClick={props.onClick}
                                    sx={{
                                        marginTop: 0.5,
                                        marginRight: -34,
                                    }}>
                                    Submit</Button>
                            </div>
                        </div>
                    </Box>
                </CardContent>
            </Card>
        </Container>
    );

};
export default SupplierForm;