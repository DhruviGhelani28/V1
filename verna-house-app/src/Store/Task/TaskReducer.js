import { UserActionType } from "../Constants/UserActionType";

const initialState = {
    getMyTasks: [],
    addTask: {},
}

export const TaskReducer = (state = initialState.getMyTasks , action) => {
    switch (action.type) {
        case UserActionType.GET_MYTASKS_SUCCESS:
            return { getMyTasks: action.tasks }
        case UserActionType.GET_MYTASKS_FAIL:
            return { getMyTasks: action.tasks }
        default: return state;
    }

};
export const AddTaskReducer = (state = initialState.addTask , action) => {
    switch (action.type) {
        case UserActionType.LIST_TASKS_SUCCESS:
            return { loading: false, success: true, addTask: action.payload }
        case UserActionType.LIST_TASKS_FAIL:
            return { loading: false, addTask: action.payload }
        default: return state;
    }
}