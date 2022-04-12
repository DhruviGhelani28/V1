import SupplierReducer from "./Supplier/SupplierReducer";
import WorkerReducer from "./Worker/WorkerReducer";
import AgencyReducer from "./Agency/AgencyReducer";
import CustomerReducer from "./Customer/CustomerReducer";
import TaskReducer from "./Task/TaskReducer";
import { combineReducers } from "redux";
import { userLoginReducer, userRegisterReducer } from "./Register/RegisterReducer";
const RootReducers = combineReducers(
    {
        userRegister: userRegisterReducer,
        userLogin: userLoginReducer,
        suppliers: SupplierReducer,
        workers: WorkerReducer,
        agencies: AgencyReducer,
        customers: CustomerReducer,
        tasks : TaskReducer,
    }
)

export default RootReducers; 