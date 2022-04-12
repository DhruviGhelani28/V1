import { GET_WORKERS_DATA, GET_WORKERS_FAIL } from "../Worker/WorkerAction";

const initialState = {
    getWorkers: [],
}

const WorkerReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_WORKERS_DATA:
            return { getWorkers: action.workers }
        case GET_WORKERS_FAIL:
            return { getWorkers: action.workers }
        default: return state;
    }

};
export default WorkerReducer;