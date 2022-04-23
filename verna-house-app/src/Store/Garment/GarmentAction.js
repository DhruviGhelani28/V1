import axios from "axios";
import { UserActionType } from "../Constants/UserActionType";

const BaseUrl = "http://localhost:8000";

export const getMyGarments = () => async (dispatch) => {
    console.log("garments dispatch");
    try {

        const token = JSON.parse(localStorage.getItem("userInfo")).token
        const config = {
            headers: {
                "content-type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
        };
        const response = await axios.get(`${BaseUrl}/api/MyGarments/`, config);
        console.log("garments call")
        dispatch({ type: UserActionType.GET_MYGARMENTS_SUCCESS, garments: response.data });


    } catch (error) {
        const garment_error = "You are not authorised person to list the garments.";
        dispatch({
            type: UserActionType.GET_MYGARMENTS_FAIL, garments: garment_error,
        });
        // console.log("You are not authorised person to list the suppliers.");
    }
}

export const addGarment = (values) => async (dispatch) => {
    console.log("addgarment dispatch");
    console.log(values)
    try {
        const token = JSON.parse(localStorage.getItem("userInfo")).token

        const config = {
            headers: {
                "content-type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
        };
        const response = await axios.post(`${BaseUrl}/api/AddGarment/`, values['data'], config);
        console.log("garment call")
        dispatch({ type: UserActionType.ADD_GARMENT_SUCCESS, garment: response.data });


    } catch (error) {
        const garment_error = "You are not authorised person to ADD the garment.";
        dispatch({
            type: UserActionType.ADD_GARMENT_FAIL, garment: garment_error,
        });
        // console.log("You are not authorised person to list the suppliers.");
    }
}