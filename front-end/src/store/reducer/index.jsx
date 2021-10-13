import { ProcessRedducer } from "./process";
import { combineReducers } from "redux";

const rootReducers = combineReducers({
    ProcessRedducer: ProcessRedducer,
});

export default rootReducers;