import React from "react";
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import classes from ".././Login.module.css"
const itemData = [
    {
        img: 'https://images03.nicepage.com/a1389d7bc73adea1e1c1fb7e/31087d27a14357e5875cc8ae/pexels-photo-3894515.jpeg',
        title: 'Bed',
    },
    {
        img: 'https://images03.nicepage.com/a1389d7bc73adea1e1c1fb7e/e566dee78e6b5524bd450ea0/pexels-photo-3894519.jpeg',
        title: 'Books',
    },
    {
        img: 'https://images03.nicepage.com/a1389d7bc73adea1e1c1fb7e/b3309f6094e9555197a00076/pexels-photo-3894538.jpeg',
        title: 'Sink',
    },
    {
        img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
        title: 'Kitchen',
    },
    {
        img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
        title: 'Blinds',
    },
    {
        img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
        title: 'Chairs',
    },
    // {
    //     img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
    //     title: 'Laptop',
    // },
    // {
    //     img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
    //     title: 'Doors',
    // },
    // {
    //     img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
    //     title: 'Coffee',
    // },
    // {
    //     img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
    //     title: 'Storage',
    // },
    // {
    //     img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
    //     title: 'Candle',
    // },
    // {
    //     img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
    //     title: 'Coffee table',
    // },
];

const About = () => {
    return (
        <div className={classes.aboutBack}>
            <Box sx={{ paddingLeft: 2, paddingTop: 1, marginTop: 0 }} >
                About Us nligfgherigdnvuhnhfiourhbndkhr wrupoufhdn
                <Box sx={{ marginTop: 100 }}>
                    <ImageList variant="masonry" cols={5} gap={1}>
                        {itemData.map((item) => (
                            <ImageListItem key={item.img}>
                                <img
                                    src={`${item.img}?w=248&fit=crop&auto=format`}
                                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                    alt={item.title}
                                    loading="lazy"
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </Box>
                
            </Box>
        </div>
    );

};
export default About;