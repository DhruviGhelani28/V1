import axios from "axios";
import { UserActionType } from "../Constants/UserActionType";


const BaseUrl = "http://localhost:8000";
export const getAgencies = () => async (dispatch, getState) => {
    console.log("Agency dispatch");
    try {
        const {
            userLogin: { userInfo },
        } = getState();
        const config = {
            headers: {
                "content-type": "application/json",
                "Authorization": `Bearer ${userInfo.token}`,
            },
        };
        const response = await axios.get(`${BaseUrl}/api/Agencies/`, config);
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