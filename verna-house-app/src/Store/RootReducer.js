import SupplierReducer from "./Supplier/SupplierReducer";
import { combineReducers } from "redux";
const RootReducers = combineReducers(
    {
        suppliers:SupplierReducer,
    }
)
export default RootReducers;