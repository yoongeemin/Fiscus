import { combineReducers } from "redux-immutable";
import userReducer from "./userReducer";
import quoteReducer from "./quoteReducer";
import routeReducer from "./routeReducer";

export default combineReducers({
    userReducer,
    quoteReducer,
    routeReducer,
});
