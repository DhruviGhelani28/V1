import axios from "axios";
import { UserActionType } from "../Constants/UserActionType";

const BaseUrl = "http://localhost:8000";
export const getModels = () => async (dispatch) => {
    console.log("models dispatch");
    try {
        const token = JSON.parse(localStorage.getItem("userInfo")).token
        const config = {
            headers: {
                "content-type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
        };
        const response = await axios.get(`${BaseUrl}/api/Models/`, config);
        console.log("models call")
        dispatch({ type: UserActionType.LIST_MODEL_SUCCESS, models: response.data });


    } catch (error) {
        const model_error = "You are not authorised person to list the models.";
        dispatch({
            type: UserActionType.LIST_MODEL_FAIL, models: model_error,
        });
        // console.log("You are not authorised person to list the suppliers.");
    }
}