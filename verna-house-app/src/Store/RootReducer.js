import { getSuppliersReducer, SupplierCreateReducer, editSupplierReducer, getSupplierReducer } from "./Supplier/SupplierReducer";
import { getWorkerReducer, editWorkerReducer } from "./Worker/WorkerReducer";
import AgencyReducer from "./Agency/AgencyReducer";
import CustomerReducer from "./Customer/CustomerReducer";
import { TaskReducer, AddTaskReducer } from "./Task/TaskReducer";
import { GadgetReducer, AddGadgetReducer } from "./Gadget/GadgetReducer";
import { GarmentReducer, AddGarmentReducer } from "./Garment/GarmentReducer";
import { PhotoPosterReducer } from "./PhotoPoster/PhotoPosterReducer";
import { ModelReducer } from "./Model/ModelReducer";
import { combineReducers } from "redux";
import { userLoginReducer, userRegisterReducer, usersReducer } from "./Register/RegisterReducer";
const RootReducers = combineReducers(
    {
        userRegister: userRegisterReducer,
        userLogin: userLoginReducer,
        users: usersReducer,

        suppliers: getSuppliersReducer,
        // supplierData: SupplierCreateReducer,
        supplier: getSupplierReducer,
        esupplier : editSupplierReducer,

        workers: getWorkerReducer,
        worker: editWorkerReducer,

        agencies: AgencyReducer,

        customers: CustomerReducer,

        tasks: TaskReducer,
        addTask: AddTaskReducer,

        gadgets: GadgetReducer,
        addGadget: AddGadgetReducer,

        garments: GarmentReducer,
        addGarment: AddGarmentReducer,

        photoposters: PhotoPosterReducer,

        models: ModelReducer,
    }
)

export default RootReducers; 