import { GET_SUPPLIER_DATA, GET_SUPPLIER_FAIL } from "./SupplierAction";

const initialState = {
    getSuppliers: [],
}

const SupplierReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SUPPLIER_DATA:
            return { getSuppliers: action.suppliers }
        case GET_SUPPLIER_FAIL:
            return { getSuppliers: action.suppliers }
        default: return state;
    }

};
export default SupplierReducer;