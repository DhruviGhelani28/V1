import { userLoginReducer, userRegisterReducer, usersReducer } from "./Register/RegisterReducer";

import { getSuppliersReducer, editSupplierReducer, getSupplierReducer } from "./Supplier/SupplierReducer";
import { getWorkersReducer, getWorkerReducer, editWorkerReducer } from "./Worker/WorkerReducer";
import { getAgenciesReducer, getAgencyReducer, editAgencyReducer } from "./Agency/AgencyReducer";
import { getCustomersReducer, getCustomerReducer, editCustomerReducer } from "./Customer/CustomerReducer";
import { getModelsReducer, getModelReducer, editModelReducer } from "./Model/ModelReducer";

import { TaskReducer, AddTaskReducer } from "./Task/TaskReducer";
import { GadgetReducer, AddGadgetReducer } from "./Gadget/GadgetReducer";
import { GarmentReducer, AddGarmentReducer } from "./Garment/GarmentReducer";
import { PhotoPosterReducer } from "./PhotoPoster/PhotoPosterReducer";

import { combineReducers } from "redux";

const RootReducers = combineReducers(
    {
        userRegister: userRegisterReducer,
        userLogin: userLoginReducer,
        users: usersReducer,

        // supplierData: SupplierCreateReducer,
        suppliers: getSuppliersReducer,
        supplier: getSupplierReducer,
        esupplier: editSupplierReducer,

        // workers: getWorkersReducer,
        worker: getWorkerReducer,
        eworker: editWorkerReducer,

        agencies: getAgenciesReducer,
        agency: getAgencyReducer,
        eagency: editAgencyReducer,

        customers: getCustomersReducer,
        customer: getCustomerReducer,
        ecustomer: editCustomerReducer,

        models: getModelsReducer,
        model: getModelReducer,
        emodel: editModelReducer,

        tasks: TaskReducer,
        addTask: AddTaskReducer,

        gadgets: GadgetReducer,
        addGadget: AddGadgetReducer,

        garments: GarmentReducer,
        addGarment: AddGarmentReducer,

        photoposters: PhotoPosterReducer,


    }
)

export default RootReducers; 