import {
    SET_CURRENT_ITEM,
    SET_CURRENT_GENERATION,
} from '../constants';

export function setCurrentItem(item) {
    return (dispatch) => {
        dispatch({
            type: SET_CURRENT_ITEM,
            payload: item,
        });
    };
}

export function setCurrentGeneration(name) {
    return (dispatch) => {
        dispatch({
            type: SET_CURRENT_GENERATION,
            payload: name,
        });
    };
}
