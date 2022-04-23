import { UserActionType } from "../Constants/UserActionType";

const initialState = {
    getMyGarments: [],
    addGarment: {}
}

export const GarmentReducer = (state = initialState.getMyGarments, action) => {
    switch (action.type) {
        case UserActionType.GET_MYGARMENTS_SUCCESS:
            return { getMyGarments: action.garments }
        case UserActionType.GET_MYGARMENTS_FAIL:
            return { getMyGarments: action.garments }
        default: return state;
    }

};
export const AddGarmentReducer = (state = initialState.addGarment, action) => {
    switch (action.type) {
        case UserActionType.ADD_GARMENT_SUCCESS:
            return { loading: false, success: true, addGarment: action.garment }
        case UserActionType.ADD_GARMENT_FAIL:
            return { loading: false, addGarment: action.garment }
        default: return state;
    }
}