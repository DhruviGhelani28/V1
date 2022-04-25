import axios from "axios";
import { UserActionType } from "../Constants/UserActionType";


const BaseUrl = "http://localhost:8000";


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
        const { data } = await axios.post(`${BaseUrl}/api/register/`, values, config);

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
    // localStorage.removeItem("userInfo");
    try {

        console.log("axs", values);
        const { data } = await axios.post(`${BaseUrl}/api/users/token/`, values);
        console.log("assas", data)
        const username = values.username
        const token = data['access']
        const config = {
            headers: {
                "content-type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
        };

        // const { data } = await axios.get(`${BaseUrl}/api/users/`, values);
        const login = await axios.post(`${BaseUrl}/api/login/`, values, config)
        dispatch({
            type: UserActionType.USER_LOGIN_SUCCESS, payload: login,
        });
        const role = login['data']
        console.log("login call", login)

        localStorage.setItem("userInfo", JSON.stringify({ username, token, role }));
    } catch (error) {
        const login_error = error.response.data.non_field_errors[0];
        dispatch({
            type: UserActionType.USER_LOGIN_FAIL, payload: { login_error },
        });
    }
};

export const logout = () => async (dispatch) => {
    localStorage.removeItem("userInfo");
    dispatch({ type: UserActionType.USER_LOGOUT });
};

// export const getUsers = () => async (dispatch) => {
//     console.log("all users dispatch")
//     try {
//         // dispatch({
//         //     type: UserActionType.USER_REGISTER_REQUEST
//         // });
//         const config = {
//             headers: {
//                 "content-type": "application/json",
//             },
//         };
//         console.log("usesr call");
//         const { data } = await axios.get(`${BaseUrl}/api/Users/`, config);
//         console.log(data)
//         dispatch({
//             type: UserActionType.GET_USERS_SUCCESS, payload: data,
//         })
//     } catch (error) {
//         // console.log(error.response.data);
//         dispatch({
//             type: UserActionType.GET_USERS_FAIL, payload: error.response.data,
//         });
//     }
// };