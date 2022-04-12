import axios from "axios";
import { UserActionType } from "../Constants/UserActionType";

const BaseUrl = "http://localhost:8000";

export const getMyTasks = () => async (dispatch, getState) => {
    console.log("tasks dispatch");
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
        const response = await axios.get(`${BaseUrl}/api/MyTasks/`, config);
        console.log("tasks call")
        dispatch({ type: UserActionType.GET_MYTASKS_SUCCESS, tasks: response.data });


    } catch (error) {
        const task_error = "You are not authorised person to list the tasks.";
        dispatch({
            type: UserActionType.GET_MYTASKS_FAIL, tasks: task_error,
        });
        // console.log("You are not authorised person to list the suppliers.");
    }
}