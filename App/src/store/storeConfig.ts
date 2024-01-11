import { createStore,combineReducers } from "redux";

import stateReducer from './reducers/adicionar'
const reducers = combineReducers({
    state : stateReducer
})
const storeConfig = () => {
    return createStore(reducers)
}

export default storeConfig