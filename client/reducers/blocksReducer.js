import {
    INIT_BLOCKS,
    SET_SELECTED_BLOCK,
} from '../constants/Blocks';

const initialState = {
    selectedBlock: '1',
    blocks: {},
};

export default function map(state = initialState, action) {
    switch (action.type) {
        case INIT_BLOCKS:
            return {...state, blocks: action.payload};
        case SET_SELECTED_BLOCK:
            return {...state, selectedBlock: action.payload};
        default:
            return state;
    }
}