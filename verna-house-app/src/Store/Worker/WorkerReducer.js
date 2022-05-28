
import { UserActionType } from '../Constants/UserActionType';

const initialState = {
    getWorkers: [],
    getWorker: {},
    editWorker: {},
}

export const getWorkersReducer = (state = initialState.getWorkers, action) => {
    switch (action.type) {
        case UserActionType.GET_WORKERS_SUCCESS:
            return { getWorkers: action.workers }
        case UserActionType.GET_WORKERS_FAIL:
            return { getWorkers: action.workers }
        default: return state;
    }

};

export const getWorkerReducer = (state = initialState.getWorker, action) => {
    switch (action.type) {
        case UserActionType.GET_WORKER_SUCCESS:
            return { getWorker: action.worker }
        case UserActionType.GET_WORKER_FAIL:
            return { getWorker: action.worker }
        default: return state;
    }

};

export const editWorkerReducer = (state = initialState.editWorker, action) => {
    switch (action.type) {
        case UserActionType.EDIT_WORKER_SUCCESS:
            return { editWorker: action.worker };
        case UserActionType.EDIT_WORKER_FAIL:
            return { editWorker: action.worker };
        default: return state;
    }

};
