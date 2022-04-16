import axios from "axios";
import { UserActionType } from "../Constants/UserActionType";


const BaseUrl = "http://localhost:8000";
export const getCustomers = () => async (dispatch) => {
    console.log("Customer dispatch");
    try {
        const token = JSON.parse(localStorage.getItem("userInfo")).token
        const config = {
            headers: {
                "content-type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
        };
        const response = await axios.get(`${BaseUrl}/api/Customers/`, config);
        console.log("customer call")
        dispatch({ type: UserActionType.GET_CUSTOMERS_DATA, customers: response.data });


    } catch (error) {
        const customer_error = "You are not authorised person to list the customers.";
        dispatch({
            type: UserActionType.GET_CUSTOMERS_FAIL, customers: customer_error,
        });
        // console.log("You are not authorised person to list the suppliers.");
    }
}