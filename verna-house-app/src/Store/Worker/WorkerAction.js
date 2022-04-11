

import axios from "axios";
    
const baseUrl = "http://localhost:8000";
export const GET_WORKER_DATA = "GET_WORKER_DATA ";
export const GET_WORKER_FAIL = "GET_WORKER_FAIL";

export const getWorkers = () => async (dispatch, getState) => {
    console.log("Worker dispatch");
    try {
        const {
            userLogin: { userInfo },
        } = getState();
        const config = {
            headers: {
                "content-type": "application/json",
                "Authorization": `Bearer ${userInfo}`,
            },
        };
        const response = await axios.get(`${baseUrl}/api/Workers/`, config);
        console.log("worker call")
        dispatch({ type: GET_WORKER_DATA, workers: response.data });


    } catch (error) {
        const worker_error = "You are not authorised person to list the workers.";
        dispatch({
            type: GET_WORKER_FAIL, workers: worker_error,
        });
        // console.log("You are not authorised person to list the suppliers.");
    }
}