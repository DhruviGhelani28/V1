import axios from "axios";

const baseUrl = "http://localhost:3001";
export const GET_SUPPLIER_DATA = "GET_SUPPLIER_DATA ";

export const getSuppliers = () => {
    return (
        async (dispatch) => {
            try {
                const response = await axios.get(`${baseUrl}/Suppliers/`);
                const resData = await response;

                dispatch({ type: GET_SUPPLIER_DATA, suppliers: resData });
            } catch (error)
            {
                throw error;
            }
        }
    )
}