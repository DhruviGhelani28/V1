import axios from "axios";
import { UserActionType } from "../Constants/UserActionType";


const BaseUrl = "http://localhost:8000";
// export const GET_SUPPLIER_DATA = "GET_REGISTER_DATA ";

export const getRegisterData = (values) => async (dispatch) => {
    console.log("Register dispatch")
    try {
        // dispatch({
        //     type: UserActionType.USER_REGISTER_REQUEST
        // });
        const config = {
            headers: {
                "content-type": "application/json",
            },
        };
        console.log("RegisterData save successfully");
        const { data } = await axios.post("http://127.0.0.1:8000/api/register/", values, config);

        dispatch({
            type: UserActionType.USER_REGISTER_SUCCESS, payload: data,
        })
    } catch (error) {
        console.log(error.response.data);
        const username = error.response.data.username;
        const password = error.response.data.password;
        const email = error.response.data.email;
        dispatch({
            type: UserActionType.USER_REGISTER_FAIL, payload: { username, password, email },
        });
    }
};

export const getLoginData = (values) => async (dispatch) => {
    console.log("Login dispatch")
    try {
        // dispatch({
        //     type: UserActionType.USER_LOGIN_REQUEST,
        // });
        
        const { data } = await axios.post(
            "http://127.0.0.1:8000/api/users/token/", values['data']);
        
        const token = data['access']
        const config = {
            headers: {
                "content-type": "application/json",
                "Authorization": `Token : ${token}`,
            },
        };
        const { login } = await axios.post("http://127.0.0.1:8000/api/login/", values['data'], config)
        dispatch({
            type: UserActionType.USER_LOGIN_SUCCESS, payload: data,
        });
        
        localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
        const login_error = error.response.data.non_field_errors[1];
        dispatch({
            type: UserActionType.USER_LOGIN_FAIL, payload: { login_error },
        });
    }
};

export const logout = () => async (dispatch) => {
    localStorage.removeItem("userInfo");
    dispatch({ type: UserActionType.USER_LOGOUT });
};