import { SUPPLIER_CREATE_SUCCESS, GET_SUPPLIERS_FAIL, GET_SUPPLIERS_SUCCESS, SUPPLIER_CREATE_FAIL} from "./SupplierAction";

const initialState = {
    getSuppliers: [],
    getSupplierData:[]
,}

export const SupplierReducer = (state = initialState.getSuppliers, action) => {
    switch (action.type) {
        case GET_SUPPLIERS_SUCCESS:
            return { getSuppliers: action.suppliers }
        case GET_SUPPLIERS_FAIL:
            return { getSuppliers: action.suppliers }
        default: return state;
    }

};

export const SupplierCreateReducer = (state =initialState.getSupplierData, action) => {
    switch (action.type) {
        // case USER_REGISTER_REQUEST:
        //     return { loading: true };
        case SUPPLIER_CREATE_SUCCESS:
            return { loading: false, userInfo: action.payload };
        case SUPPLIER_CREATE_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};