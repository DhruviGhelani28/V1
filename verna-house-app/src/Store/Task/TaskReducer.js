import { UserActionType } from "../Constants/UserActionType";

const initialState = {
    getMyTasks: [],
}

const TaskReducer = (state = initialState, action) => {
    switch (action.type) {
        case UserActionType.GET_MYTASKS_SUCCESS:
            return { getMyTasks: action.tasks }
        case UserActionType.GET_MYTASKS_FAIL:
            return { getMyTasks: action.tasks }
        default: return state;
    }

};
export default TaskReducer;