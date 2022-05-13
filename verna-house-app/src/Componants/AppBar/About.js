import React from "react";
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import classes from ".././Login.module.css";
import { CardMedia, Grid, Card, Container } from "@mui/material";
import image1 from '../../static/images/studio.jpg';
import image2 from '../../static/images/film4.jpeg';
import image3 from '../../static/images/connect-people.jpg';
// import RandomIcon from '@mui/icons-material/RandomIcon';
// import image4 from '../../static/images/film2.jpeg';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material';
import Home from '@mui/icons-material/Home';
// function Item(props) {
//     return (
//         <Paper>
//             {/* <h2>{props.item.title}</h2> */}
//             {/* <Grid container>
//                 <Grid item xs={12} key={props.i}> */}

//             <img
//                 src={`${props.item.img}`}
//                 alt={props.item.title}
//                 loading="lazy"
//             />
//             {/* </Grid> */}
//             {/* // </Grid> */}

//             <Button className="CheckButton">
//                 Check it out!
//             </Button>
//         </Paper>
//     )
// }

const itemData = [
    {
        img: `${image1}`,
        title: 'Bed',
    },
    {
        img: `${image2}`,
        title: 'Books',
    },
    {
        img: `${image3}`,
        title: 'Sink',
    }
];

const About = (props) => {
    return (

        <Container className={classes.mainback} sx={{ marginTop: 0, padding: 1 }}>
            {/* About Us nligfgherigdnvuhnhfiourhbndkhr wrupoufhdn */}
            {/* className={classes.aboutBack} */}
            {/* <Box sx={{ marginTop: 100 }}>
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
                </Box> */}
            {/* <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        {itemData.map((item, index) => (
                            <div class="carousel-item active" key={index}>
                                <img class="d-block w-100" src={item.img} alt="First slide" />
                            </div>
                        ))}
                        {/* <div class="carousel-item active">
                            <img class="d-block w-100" src="..." alt="First slide"/>
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="..." alt="Second slide"/>
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="..." alt="Third slide"/>
                        </div> 
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                {/* </div>
                <div class="carousel-item">
                    <img src="..." alt="..."/>
                        <div class="carousel-caption d-none d-md-block">
                            <h5>...</h5>
                            <p>...</p>
                        </div>
                </div> */}
            <Box sx={{ width: '100%', height: '23%', border: '1px solid black', marginTop: 3, paddingTop: 4, paddingRight: 4, paddingLeft: 4, marginRight: 4, paddingBottom: 1, background: 'linear-gradient(45deg,#434344 5%,#575758 20%)' }} className={classes.carousle}>
                <Carousel

                    // IndicatorIcon={<Home />}
                    indicatorIconButtonProps={{
                        style: {
                            padding: '5px',    // 1
                            color: 'black'       // 3
                        }
                    }}
                    activeIndicatorIconButtonProps={{
                        style: {
                            backgroundColor: 'white' // 2
                        }
                    }}
                    indicatorContainerProps={{
                        style: {
                            textAlign: 'center' // 4
                        }

                    }}

                >
                    {
                        itemData.map((item, i) =>
                            <Card sx={{ width: '100%', borderRadius: 1, borderColor: "#121212", borderWidth: 0.1, display: 'flex', elevation: 24 }} key={i}>
                                <CardMedia

                                    src={item.img}
                                    component="img"
                                    alt={item.title}
                                    //autoPlay
                                    loop
                                    playing='true'
                                    muted
                                // loading="lazy"

                                // width='100%'
                                />
                            </Card>
                        )
                    }
                </Carousel>
            </Box>
        </Container>
    );

};
export default About;