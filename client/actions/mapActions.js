import {
    MAP_INIT,
    CHANGED_MAP_SOURCE,
    UPDATE_MAP_SIZE,
    SET_SELECT,
    ADD_SELECTION,
    RESET_SELECTIONS,
    CREATE_STRUCTURES,
} from '../constants/Map';

export function initMap(source, width, height) {

    return (dispatch) => {
        dispatch({
            type: MAP_INIT,
            payload: {
                source,
                width,
                height,
            },
        });

    }
}

export function addMapSource(elem, x, y) {
    return (dispatch) => {
        dispatch({
            type: CHANGED_MAP_SOURCE,
            x, y, elem,
        });
    }
}
export function deleteMapSource(x, y) {
    return (dispatch) => {
        dispatch({
            type: CHANGED_MAP_SOURCE,
            x, y, elem: '',
        });
    }
}

export function updateMapSize(newWidth, newHeight) {
    return (dispatch) => {
        dispatch({
            type: UPDATE_MAP_SIZE,
            payload: {newWidth, newHeight},
        });
    }
}

export function selectCells(value) {
    return (dispatch) => {
        dispatch({
            type: SET_SELECT,
            payload: value,
        });
    }
}

export function addSelection(x, y) {
    return (dispatch) => {
        dispatch({
            type: ADD_SELECTION,
            x, y,
        });
    }
}

export function resetSelections() {
    return (dispatch) => {
        dispatch({
            type: RESET_SELECTIONS,
            payload: [],
        });
    }
}

export function createStructures(source, x, y) {
    return (dispatch) => {
        dispatch({
            type: CREATE_STRUCTURES,
            source,
            x,
            y,
        });
    }
}


