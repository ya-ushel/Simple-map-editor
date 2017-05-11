import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';



const createStoreWithMiddleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware)
)(createStore);

export default function configureStore(initialState) {
    return createStoreWithMiddleware(rootReducer, initialState);

}
