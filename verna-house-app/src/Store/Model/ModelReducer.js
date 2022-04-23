import { UserActionType } from "../Constants/UserActionType";

const initialState = {
    getModels: [],
    // addTask: {},
}

export const ModelReducer = (state = initialState.getModels, action) => {
    switch (action.type) {
        case UserActionType.LIST_MODEL_SUCCESS:
            return { getModels: action.models }
        case UserActionType.LIST_MODEL_FAIL:
            return { getModels: action.models }
        default: return state;
    }

};