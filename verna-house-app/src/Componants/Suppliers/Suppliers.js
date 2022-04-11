import React, { useEffect } from "react";
import Paper from '@mui/material/Paper';
// import getSuppliers from "../Store/Supplier/SupplierAction"
import { getSuppliers } from "../../Store/Supplier/SupplierAction";
import { useDispatch, useSelector } from "react-redux";

import Grid from '@mui/material/Grid';
import { Typography } from "@mui/material";
const Suppliers = props => {

    const dispatch = useDispatch()
    const suppliers = useSelector((state) => state.suppliers);
    const { loading, details, error } = suppliers;
    useEffect(() => {
        dispatch(getSuppliers())
    }, [dispatch])

    // console.log(suppliers['getSuppliers'])
    // console.log(loading)
    // console.log(details)
    // console.log(error)

    return (
        <React.Fragment>
            <h2>Suppliers will be here</h2>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    {
                        <Paper elevation={6}>
                            <Typography>
                            
                            </Typography>

                        </Paper>

                    }
                </Grid>
            </Grid>
        </React.Fragment>
    );
};
export default Suppliers;