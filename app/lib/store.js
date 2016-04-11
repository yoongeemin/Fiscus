import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { routerMiddleware } from "react-router-redux";
import promise from "redux-promise";
import createLogger from "redux-logger";

//export function dateToString(date) {
//    const monthString = date.month()+1<10 ? "0"+(date.month()+1).toString() : (date.month()+1).toString();
//    const dayString = date.date()<10 ? "0"+date.date().toString() : date.date().toString();
//    const dateString = date.year().toString()+"-"+monthString+"-"+dayString;
//
//    const hourString = date.hour()<10 ? "0"+date.hour().toString() : date.hour().toString();
//    const minuteString = date.minutes()<10 ? "0"+date.minutes().toString() : date.minutes().toString();
//    const timeString = hourString+":"+minuteString;
//
//    const secondString = date.seconds()<10 ? "0"+date.seconds().toString() : date.seconds().toString();
//
//    return [dateString, timeString, secondString];
//}

export const configureStore = (reducer, history, initialState) => {
    const middlewares = [thunk, promise, routerMiddleware(history)];

    if (process.env.NODE_ENV === "DEV") {
        middlewares.push(createLogger());

        if (module.hot) {
            module.hot.accept("../reducers/index", () => {
                const nextReducer = require("../reducers/index").default;
                store.replaceReducer(nextReducer);
            });
        }
    }

    return createStore(reducer, initialState, applyMiddleware(...middlewares));
};
