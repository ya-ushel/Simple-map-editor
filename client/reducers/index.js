import { combineReducers } from 'redux';
import mapReducer from './mapReducer';
import toolsReducer from './toolsReducer';
import blocksReducer from './blocksReducer';


const rootReducer = combineReducers({
    mapReducer,
    toolsReducer,
    blocksReducer,
});

export default rootReducer;
