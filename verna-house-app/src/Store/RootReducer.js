import SupplierReducer from "./Supplier/SupplierReducer";
import { combineReducers } from "redux";
import { userLoginReducer, userRegisterReducer } from "./Register/RegisterReducer";
const RootReducers = combineReducers(
    {
        register: userRegisterReducer,
        login: userLoginReducer,
        suppliers: SupplierReducer,
    }
)

export default RootReducers; 