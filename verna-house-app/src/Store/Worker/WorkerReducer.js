import { GET_WORKER_DATA, GET_WORKER_FAIL } from "../Worker/WorkerAction";

const initialState = {
    getWorkers: [],
}

const WorkerReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_WORKER_DATA:
            return { getWorkers: action.workers }
        case GET_WORKER_FAIL:
            return { getWorkers: action.workers }
        default: return state;
    }

};
export default WorkerReducer;