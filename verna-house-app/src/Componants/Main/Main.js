

import classes from "../Login.module.css";

import Box from '@mui/material/Box';
// import image1 from ".../static/images/1.jpeg"
// import image2 from ".../static/images/2.jpeg"
// import image3 from ".../static/images/3.jpeg"
import Typography from '@mui/material/Typography';
// import Image from "@mui/material/Image";
import { styled, useTheme } from '@mui/material/styles';
import React, { Fragment } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ReactCarousel, { AFTER, CENTER, BEFORE } from "react-carousel-animated";
import images from "../ImageSlider/MainPageSliderImages";
// import "react-carousel-animated/dist/style.css";

// const itemData = [
//     {
//         img: "https://images03.nicepage.com/a1389d7bc73adea1e1c1fb7e/ed393553372b5fedbb31d038/pexelsphoto1002638.jpeg",
//         title: 'Breakfast',
//     },
//     {
//         img: "https://images02.nicepage.com/c461c07a441a5d220e8feb1a/dc8fb1e500cf5d99b9134449/26afbfd6f4b0f7d2c0352d2c78f559db.jpeg",
//         title: 'Burger',
//     },
// ]

// const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
//     ({ theme, open, drawerwidth }) => ({
//         flexGrow: 1,
//         padding: theme.spacing(3),
//         transition: theme.transitions.create(['width', 'margin'], {
//             easing: theme.transitions.easing.sharp,
//             duration: theme.transitions.duration.leavingScreen,
//         }),
//         marginLeft: drawerwidth,
//         width: `calc(100% - ${drawerwidth}px)`,
//         ...(open && {
//             transition: theme.transitions.create(['width', 'margin'], {
//                 easing: theme.transitions.easing.easeOut,
//                 duration: theme.transitions.duration.enteringScreen,
//             }),
//             marginLeft: 0,
//         }),
//     }),
// );

const Main1 = () => {
    return (
        <Fragment>
          
            
        </Fragment>
    )
};
export default Main1;
// <Box
//     sx={{ paddingLeft: 1, paddingTop: 1, marginTop:0 }} className={classes.mainback}>
{/* <Image
                src= "https://images03.nicepage.com/a1389d7bc73adea1e1c1fb7e/ed393553372b5fedbb31d038/pexelsphoto1002638.jpeg"
                height= "700px"
                width = "100%" 
                loading="lazy">
                       
            </Image> 
            <Image
                src= " https://images02.nicepage.com/c461c07a441a5d220e8feb1a/dc8fb1e500cf5d99b9134449/26afbfd6f4b0f7d2c0352d2c78f559db.jpeg"
                height="700px"
                width="100%"
                marginTop= "10px"
                loading="lazy">
            </Image>  
         className={classes.mainBack} 
            <ImageList  >
                {itemData.map((item) => (
                    <ImageListItem key={item.img}>
                        <img
                            src={`${item.img}`}
                            // srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                            height="700px"
                            width="100%"
                        />
                    </ImageListItem>
                ))} 
                 <Image
                    src="https://images03.nicepage.com/a1389d7bc73adea1e1c1fb7e/ed393553372b5fedbb31d038/pexelsphoto1002638.jpeg"
                    height="700px"
                    width="100%"
                    loading="lazy">

                </Image>
                <Image
                    src=" https://images02.nicepage.com/c461c07a441a5d220e8feb1a/dc8fb1e500cf5d99b9134449/26afbfd6f4b0f7d2c0352d2c78f559db.jpeg"
                    height="700px"
                    width="100%"
                    marginTop="10px"
                    loading="lazy">
                </Image> 
            </ImageList> */}

