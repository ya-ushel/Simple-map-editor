import {
    MAP_INIT,
    CHANGED_MAP_SOURCE,
    UPDATE_MAP_SIZE,
    SET_SELECT,
    ADD_SELECTION,
    RESET_SELECTIONS,
    MAPPING,
    CREATE_STRUCTURES,
} from '../constants';

const initialState = {
    source: [],
    width: 0,
    height: 0,
    mapping: MAPPING,
    select: false,
    selectedItem: []
};

export default function map(state = initialState, action) {
    switch (action.type) {
        case MAP_INIT: {
            return {
                ...state,
                source: action.payload.source,
                width: action.payload.width,
                height: action.payload.height
            };
        }
        case CHANGED_MAP_SOURCE:
            let newSource = state.source;
            newSource[action.x][action.y] = action.elem;
            return {
                ...state,
                source: newSource
            };
        case UPDATE_MAP_SIZE:
            return {
                ...state,
                width: action.payload.newWidth,
                height: action.payload.newHeight
            };
        case SET_SELECT:
            return {
                ...state,
                select: action.payload
            };
        case ADD_SELECTION:
            let newSelection = state.selectedItem;
            newSelection.push({x: action.x, y: action.y});
            return {
                ...state,
                selectedItem: newSelection
            };
        case RESET_SELECTIONS:
            return {
                ...state,
                selectedItem: action.payload
            };
        case CREATE_STRUCTURES:
            let newCreateSource = state.source;
            let generationHeight = action.source.length;
            let generationWidth = action.source[0].length;

            for (let i = action.x, i1 = 0; i1 < generationHeight; i++, i1++) {
                for (let j = action.y, j1 = 0; j1 < generationWidth; j++, j1++) {
                    if (action.source[i1][j1] !== '0')
                        newCreateSource[i][j] = action.source[i1][j1];
                }
            }
            return {
                ...state,
                source: newCreateSource
            };
        default:
            return state;
    }
}