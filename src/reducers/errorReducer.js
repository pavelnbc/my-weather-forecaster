import { HANDLE_ERROR } from '../actions';

function errorReducer(state = false, action) {
    switch (action.type) {
        case HANDLE_ERROR:
            return !state;

        default:
            return state
    }
}

export default errorReducer