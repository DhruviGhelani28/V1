import { UserActionType } from "../Constants/UserActionType";

const initialState = {
    getMyGadgets: [],
    addGadget: {},
}

export const GadgetReducer = (state = initialState.getMyGadgets, action) => {
    switch (action.type) {
        case UserActionType.GET_MYGADGETS_SUCCESS:
            return { getMyGadgets: action.gadgets }
        case UserActionType.GET_MYGADGETS_FAIL:
            return { getMyGadgets: action.gadgets }
        default: return state;
    }

};
export const AddGadgetReducer = (state = initialState.addGadget, action) => {
    switch (action.type) {
        case UserActionType.ADD_GADGET_SUCCESS:
            return { loading: false, success: true, addGadget: action.gadget }
        case UserActionType.ADD_GADGET_FAIL:
            return { loading: false, addGadget: action.gadget }
        default: return state;
    }
}