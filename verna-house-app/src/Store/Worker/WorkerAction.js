

import axios from "axios";
import { UserActionType } from '../Constants/UserActionType';

const baseUrl = "http://localhost:8000";
export const GET_WORKERS_DATA = "GET_WORKER_DATA ";
export const GET_WORKERS_FAIL = "GET_WORKER_FAIL";

export const getWorkers = () => async (dispatch) => {
    console.log("Workers dispatch");
    try {

        const token = JSON.parse(localStorage.getItem("userInfo")).token
        const config = {
            headers: {
                "content-type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        };
        const response = await axios.get(`${baseUrl}/api/Workers/`, config);
        console.log("workers call")
        dispatch({ type: GET_WORKERS_DATA, workers: response.data });


    } catch (error) {
        const worker_error = "You are not authorised person to list the workers.";
        dispatch({
            type: GET_WORKERS_FAIL, workers: worker_error,
        });
        // console.log("You are not authorised person to list the suppliers.");
    }
}

export const getWorker = (id) => async (dispatch, getState) => {
    console.log("edit worker dispatch call:: --", id['id'])

    try {

        const token = JSON.parse(localStorage.getItem("userInfo")).token
        const config = {
            headers: {
                "content-type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        };
        const response = await axios.get(`${baseUrl}/api/Users/Workers/${id['id']}`, config);
        console.log("edit worker call---", response.data)
        dispatch({ type: UserActionType.GET_WORKER_SUCCESS, worker: response.data });


    } catch (error) {
        const worker_error = "You are not authorised person to edit the worker.";
        dispatch({
            type: UserActionType.GET_WORKER_FAIL, worker: worker_error,
        });
        // console.log("You are not authorised person to list the suppliers.");
    }

}