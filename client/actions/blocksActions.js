import {
    INIT_BLOCKS,
    SET_SELECTED_BLOCK,
} from '../constants/Blocks';

export function initBlocks(obj) {
    return (dispatch) => {
        dispatch({
            type: INIT_BLOCKS,
            payload: obj
        });

    }
}

export function setSelectedBlock(num) {
    return (dispatch) => {
        dispatch({
            type: SET_SELECTED_BLOCK,
            payload: num
        });

    }
}