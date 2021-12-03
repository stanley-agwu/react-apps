import { combineReducers } from "redux";
import bankReducer from "./bankreducer";

const reducers = combineReducers({
    bank: bankReducer
})

export default reducers;