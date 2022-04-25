import axios from "axios";

const BaseUrl = "http://localhost:8000";
export const SUPPLIER_CREATE_SUCCESS = "SUPPLIER_CREATE_SUCCESS ";
export const SUPPLIER_CREATE_FAIL = "SUPPLIER_CREATE_FAIL ";

export const GET_SUPPLIERS_SUCCESS = "GET_SUPPLIERS_SUCCESS";
export const GET_SUPPLIERS_FAIL = "GET_SUPPLIERS_FAIL";

export const getSuppliers = () => async (dispatch) => {
    console.log("Supplier dispatch");
    try {
        const token = JSON.parse(localStorage.getItem("userInfo")).token
        const config = {
            headers: {
                "content-type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
        };
        const response = await axios.get("http://localhost:8000/api/Suppliers/", config);
        console.log("Supplier call");
        dispatch({ type: GET_SUPPLIERS_SUCCESS, suppliers: response.data });


    } catch (error) {
        const supplier_error = "You are not authorised person to list the suppliers.";
        dispatch({
            type: GET_SUPPLIERS_FAIL, suppliers: supplier_error,
        });
        // console.log("You are not authorised person to list the suppliers.");
    }
}

export const getSupplierData = (values) => async (dispatch) => {
    console.log("supplier dispatch")
    try {
        // dispatch({
        //     type: UserActionType.USER_REGISTER_REQUEST
        // });
        const config = {
            headers: {
                "content-type": "application/json",
            },
        };
        console.log("suppllierData save successfully");
        const { data } = await axios.post(`${BaseUrl}/api/supplierCreate/`, values, config);

        dispatch({
            type: SUPPLIER_CREATE_SUCCESS, payload: data,
        })
    } catch (error) {
        console.log(error.response.data);
        const username = error.response.data.username;
        // const password = error.response.data.;
        const email = error.response.data.email;
        dispatch({
            type: SUPPLIER_CREATE_FAIL, payload: { username, email },
        });
    }
};

