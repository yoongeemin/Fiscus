import React from "react";
import ReactDOM from "react-dom";
import Immutable from "immutable";
import { Provider } from "react-redux";
import { syncHistoryWithStore } from "react-router-redux";
import { Router, browserHistory } from "react-router";
import reducers from "./reducers/index";
import { configureStore } from "./lib/store";
import configureRoutes from "./config/routes";

if (__CLIENT__) require("./styles/base/index");

const initialState = Immutable.fromJS(window.__INITIAL_STATE__);
const store = configureStore(reducers, browserHistory, initialState);
const history = syncHistoryWithStore(browserHistory, store, {
    selectLocationState: (state) => { return state.get("routeReducer").toJS(); },
});
const routes = configureRoutes(store);

ReactDOM.render(
    (
        <Provider store={store}>
            <Router history={history} routes={routes} />
        </Provider>
    ),
    document.getElementById("main")
);
