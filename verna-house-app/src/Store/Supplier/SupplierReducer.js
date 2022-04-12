import { GET_SUPPLIERS_DATA, GET_SUPPLIERS_FAIL } from "./SupplierAction";

const initialState = {
    getSuppliers: [],
}

const SupplierReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SUPPLIERS_DATA:
            return { getSuppliers: action.suppliers }
        case GET_SUPPLIERS_FAIL:
            return { getSuppliers: action.suppliers }
        default: return state;
    }

};
export default SupplierReducer;