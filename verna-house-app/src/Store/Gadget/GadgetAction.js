import axios from "axios";
import { UserActionType } from "../Constants/UserActionType";

const BaseUrl = "http://localhost:8000";
export const getGadgets = () => async (dispatch) => {
    console.log("gadget dispatch");
    try {
        const token = JSON.parse(localStorage.getItem("userInfo")).token
        const config = {
            headers: {
                "content-type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
        };
        const response = await axios.get(`${BaseUrl}/api/Gadgets/`, config);
        console.log("agency call")
        dispatch({ type: UserActionType.GET_AGENCIES_DATA, agencies: response.data });


    } catch (error) {
        const agency_error = "You are not authorised person to list the agencies.";
        dispatch({
            type: UserActionType.GET_AGENCIES_FAIL, agencies: agency_error,
        });
        // console.log("You are not authorised person to list the suppliers.");
    }
}