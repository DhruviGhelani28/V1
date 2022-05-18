import { SUPPLIER_CREATE_SUCCESS, SUPPLIER_CREATE_FAIL } from "./SupplierAction";
import { UserActionType } from "../Constants/UserActionType";
const initialState = {
    getSuppliers: [],
    getSupplier: {},
    getSupplierData: []
    ,
}

export const getSupplierReducer = (state = initialState.getSuppliers, action) => {
    switch (action.type) {
        case UserActionType.GET_SUPPLIERS_SUCCESS:
            return { getSuppliers: action.suppliers }
        case UserActionType.GET_SUPPLIERS_FAIL:
            return { getSuppliers: action.suppliers }
        default: return state;
    }

};

export const editSupplierReducer = (state = initialState.getSupplier, action) => {
    switch (action.type) {
        case UserActionType.GET_SUPPLIER_SUCCESS:
            return { getSupplier: action.supplier };
        case UserActionType.GET_SUPPLIER_FAIL:
            return { getSupplier: action.supplier };
        default: return state;
    }

};

export const SupplierCreateReducer = (state = initialState.getSupplierData, action) => {
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