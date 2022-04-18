import React from "react";
import { useEffect } from "react";
import Paper from '@mui/material/Paper';

import { getWorkers } from "../../Store/Worker/WorkerAction";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/system";

const Workers = props => {
    const dispatch = useDispatch()
    const workers = useSelector((state) => state.workers);
    const { loading, details, error } = workers;

    useEffect(() => {
        dispatch(getWorkers())
    }, [dispatch])
    // console.log(workers.getWorkers)

    return (
        <React.Fragment>
            <Box sx={{height: 100 }}>
                <h2 >Workers will be here</h2>
            </Box>
        </React.Fragment>
    );
};
export default Workers;