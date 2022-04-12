
import { UserActionType } from "../Constants/UserActionType";  

const initialState = {
    getAgencies: [],
}

const AgencyReducer = (state = initialState, action) => {
    switch (action.type) {
        case UserActionType.GET_AGENCIES_DATA:
            return { getAgencies: action.agencies }
        case UserActionType.GET_AGENCIES_FAIL:
            return { getAgencies: action.agencies }
        default: return state;
    }

};
export default AgencyReducer;