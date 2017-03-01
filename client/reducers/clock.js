import moment from 'moment';
import { UPDATE } from '../constants/Clock'

const initialState = {
    date: moment()
};

export default function clock(state = initialState, action) {
    switch (action.type){
        case UPDATE:
            return {...state, date: action.payload};
        default:
            return state;
    }
}

