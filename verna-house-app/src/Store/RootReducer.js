import SupplierReducer from "./Supplier/SupplierReducer";
import WorkerReducer from "./Worker/WorkerReducer";
import { combineReducers } from "redux";
import { userLoginReducer, userRegisterReducer } from "./Register/RegisterReducer";
const RootReducers = combineReducers(
    {
        userRegister: userRegisterReducer,
        userLogin: userLoginReducer,
        suppliers: SupplierReducer,
        workers : WorkerReducer,
    }
)

export default RootReducers; 