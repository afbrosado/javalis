import {combineReducers} from "redux";
import votersReducer from "./voters/votersReducers";

const rootReducer = combineReducers({
  voters: votersReducer,
});

export default rootReducer;
