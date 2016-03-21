import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
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

// export function setUpCSRFToken() {
// 	var csrfToken = $.cookie('csrftoken');
// 	$.ajaxSetup({
// 		headers: { "X-CSRFToken": csrfToken }
// 	});
// }

export function configureStore(reducer) {
    const middlewares = [thunk];

    if (process.env.NODE_ENV === "development") {
        middlewares.push(createLogger());
    }

    return createStore(reducer, applyMiddleware(...middlewares));
}
