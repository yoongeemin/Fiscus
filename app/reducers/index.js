import { combineReducers } from "redux";
import { routerReducer as routing } from "react-router-redux";
import userReducer from "./userReducer";
import quoteReducer from "./quoteReducer";

export default combineReducers({
	userReducer,
	quoteReducer,
	routing,
});
