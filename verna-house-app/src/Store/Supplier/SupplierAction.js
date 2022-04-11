import axios from "axios";

const baseUrl = "http://localhost:8000";
export const GET_SUPPLIER_DATA = "GET_SUPPLIER_DATA ";
export const GET_SUPPLIER_FAIL = "GET_SUPPLIER_FAIL";

export const getSuppliers = () => async (dispatch, getState) => {
    console.log("Supplier dispatch");
    try {
        const {
            userLogin: { userInfo },
        } = getState();
        const config = {
            headers: {
                "content-type": "application/json",
                "Authorization": `Bearer ${userInfo}`,
            },
        };
        const response = await axios.get(`${baseUrl}/api/Suppliers/`, config);
        console.log("Supplier call");
        dispatch({ type: GET_SUPPLIER_DATA, suppliers: response.data });


    } catch (error) {
        const supplier_error = "You are not authorised person to list the suppliers.";
        dispatch({
            type: GET_SUPPLIER_FAIL, suppliers: supplier_error,
        });
        // console.log("You are not authorised person to list the suppliers.");
    }
}

