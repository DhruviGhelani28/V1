import { GET_WORKERS_DATA, GET_WORKERS_FAIL } from "../Worker/WorkerAction";
import { UserActionType } from '../Constants/UserActionType';

const initialState = {
    getWorkers: [],
    getWorker: {},
}

export const getWorkerReducer = (state = initialState.getWorkers, action) => {
    switch (action.type) {
        case GET_WORKERS_DATA:
            return { getWorkers: action.workers }
        case GET_WORKERS_FAIL:
            return { getWorkers: action.workers }
        default: return state;
    }

};

export const editWorkerReducer = (state = initialState.getWorker, action) => {
    switch (action.type) {
        case UserActionType.GET_WORKER_SUCCESS:
            return { getWorker: action.worker };
        case UserActionType.GET_WORKER_FAIL:
            return { getWorker: action.worker };
        default: return state;
    }

};
