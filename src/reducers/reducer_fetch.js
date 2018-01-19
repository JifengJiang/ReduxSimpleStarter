import {FETCH_DATA} from "../actions/types";

export default function(state = {}, action) {
    switch(action.type) {
        case FETCH_DATA:
            return { payload: action.payload };
    }
    return state;
}
