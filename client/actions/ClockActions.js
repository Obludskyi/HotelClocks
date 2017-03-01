import { UPDATE } from '../constants/Clock'
import moment from 'moment';

export function update() {
    return (dispatch) => {
        setTimeout(() => {
            let date = moment();
            dispatch({
                type: UPDATE,
                payload: date
            });
        },1000)
    }
}