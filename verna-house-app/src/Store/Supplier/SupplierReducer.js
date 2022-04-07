import { GET_SUPPLIER_DATA } from "./SupplierAction";

const initialState = {
    getSuppliers: [],
}

const SupplierReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SUPPLIER_DATA:
            return { getSuppliers: action.suppliers }
    }
    return state;
};
export default SupplierReducer;