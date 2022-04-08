import axios from "axios";

const baseUrl = "http://localhost:8000";
export const GET_SUPPLIER_DATA = "GET_SUPPLIER_DATA ";

export const getSuppliers = () => async (dispatch) => {
    console.log("Supplier dispatch");
    try {
        const config = {
            headers: {
                "content-type": "application/json",
            },
        };
        const response = await axios.get(`${baseUrl}/api/Suppliers/`, config);
        dispatch({ type: GET_SUPPLIER_DATA, suppliers: response.data });


    } catch (error) {
        throw error;
    }
}

