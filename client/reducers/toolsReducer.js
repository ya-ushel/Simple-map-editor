import {
    SET_CURRENT_ITEM,
    GENERATED_STRUCTURES,
    SET_CURRENT_GENERATION,
} from '../constants';

const initialState = {
    currentItem: 'hand',
    generateObj: GENERATED_STRUCTURES,
    currentGeneration: '',
};

export default function tools(state = initialState, action) {
    switch (action.type) {
        case SET_CURRENT_ITEM:
            return {...state, currentItem: action.payload};
        case SET_CURRENT_GENERATION:
            return {...state, currentGeneration: action.payload};
        default:
            return {...state};
    }
}