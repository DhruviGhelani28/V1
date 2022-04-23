import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import GradeRoundedIcon from "@mui/icons-material/GradeRounded";
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { Grid } from "@mui/material";
import Tooltip from '@mui/material/Tooltip';
import model1 from '../../static/PhotoPoster/model1.jpg';
import { makeStyles } from "@material-ui/core/styles";
import { getModels } from "../../Store/Model/ModelAction";
import { useSelector, useDispatch } from "react-redux";
const useStyles = makeStyles({
    root: {
        margin: 0.5,
        paddingTop: 45,
    },
    root1: {
        marginTop: 5,
    }
})

const Models = props => {
    const dispatch = useDispatch()
    const models = useSelector((state) => state.models);
    // const { loading, details, error } = models;
    useEffect(() => {
        dispatch(getModels())
    }, [dispatch])

    console.log(models.getModels)
    // const length = models.getModels.length
    // console.log(length)
    // const rows = suppliers.getSuppliers

    const classes = useStyles()
    return (
        <React.Fragment>
            <h2>Models will be here</h2>
            <Grid container justifyContent="flex-start" alignItems='flex-start' direction='row' spacing={1} >
                {models.getModels && models.getModels.map((value, index) => (
                    <Grid item xs={3} key={index}>
                        <Card sx={{ maxWidth: 350, maxHeight: 230, padding: 0 }} elevation={4}
                        >
                            <CardContent sx={{ padding: 0.5, margin: 0 }}>
                                <Grid container direction={'row'} spacing={0}>
                                    <Grid item xs={8}>
                                        <Typography sx={{ fontSize: 15 }} color="text.primary" align="left">
                                            Alina Tandel
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={4} align="right">
                                        <Tooltip title="Save" >
                                            <BookmarkBorderIcon fontSize="medium" />
                                        </Tooltip>
                                    </Grid>
                                </Grid>
                                <Grid container direction={'row'}  >
                                    <Grid item xs={6} >
                                        <CardMedia
                                            align="center"
                                            component="img"
                                            sx={{ height: 200, padding: 0.5 }}
                                            image={model1}
                                            alt="Paella dish"
                                        />
                                    </Grid>
                                    <Grid item xs={6}  >

                                        <div className={classes.root1}>
                                            <Typography sx={{ fontSize: 14 }} color="text.secondary" align="left">
                                                Person no
                                            </Typography>
                                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                                Work category
                                            </Typography>
                                            <Typography variant="body2">
                                                exprience
                                                <br />
                                                Preferred Time
                                                <br />
                                                Age
                                            </Typography>
                                        </div>
                                        <div align='right' className={classes.root}>
                                            <Button >View Details </Button>
                                        </div>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}</Grid>

        </React.Fragment>
    );

};
export default Models;