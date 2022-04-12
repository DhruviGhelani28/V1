import React from "react";

// import Typography from '@mui/material/Typography';
// import { styled } from '@mui/material/styles';
import { useEffect } from "react";
import { getAgencies } from "../../Store/Agency/AgencyAction";
import { useDispatch, useSelector } from "react-redux";

const Agencies = props => {
    const dispatch = useDispatch()
    const agencies = useSelector((state) => state.agencies);
    const { loading, details, error } = agencies;

    useEffect(() => {
        dispatch(getAgencies())
    }, [dispatch])
    console.log(agencies.getAgencies)
    
    return (
        // <Typography>
            <h2>Agencies will be here</h2>
        // </Typography>
    );
};
export default Agencies;