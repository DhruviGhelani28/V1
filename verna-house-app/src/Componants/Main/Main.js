

import classes from ".././Login.module.css";

import Box from '@mui/material/Box';
// import image1 from ".../static/images/1.jpeg"
// import image2 from ".../static/images/2.jpeg"
// import image3 from ".../static/images/3.jpeg"
import Typography from '@mui/material/Typography';

import { styled, useTheme } from '@mui/material/styles';


const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open, drawerwidth }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: drawerwidth,
        width: `calc(100% - ${drawerwidth}px)`,
        ...(open && {
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const Main1 = () => {
    return (
        <Box
            sx={{ paddingLeft: 1, paddingTop: 1, marginTop:0 }} className={classes.mainBack}>
            {/* <img
                        // src={`url(https:images03.nicepage.com/a1389d7bc73adea1e1c1fb7e/ed393553372b5fedbb31d038/pexelsphoto1002638.jpeg)`}
                        src={`${image1}`}
                        height= "700px"
                        width = "100%" 
                        // alt = {image1.title}
                        loading="lazy">
                       
                    </img> */}
            <Typography>
                Hello
            </Typography>
            
        
        </Box>
    )
};
export default Main1;