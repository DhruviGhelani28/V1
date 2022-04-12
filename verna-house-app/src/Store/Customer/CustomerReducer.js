import { UserActionType } from "../Constants/UserActionType"; 

const initialState = {
    getCustomers: [],
}

const CustomerReducer = (state = initialState, action) => {
    switch (action.type) {
        case UserActionType.GET_CUSTOMERS_DATA:
            return { getCustomers: action.customers }
        case UserActionType.GET_CUSTOMERS_FAIL:
            return { getCustomers: action.customers }
        default: return state;
    }

};
export default CustomerReducer;