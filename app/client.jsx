import "./styles/base/index";

import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, browserHistory } from "react-router";
import { syncHistoryWithStore } from "react-router-redux";
import { configureStore } from "./lib/utils";
import { App, SignUp } from "./containers/index";
import { Authentication, DashBoard } from "./components/index";
import reducers from "./reducers/index";

const store = configureStore(reducers);
const history = syncHistoryWithStore(browserHistory, store);

const authentication = (nextState, replace) => {
    const authenticated = false;
    if (!authenticated) {
        replace({
            pathname: "/signin",
            state: { nextPathname: "/dashboard" },
        });
    }
    else {
        replace("/dashboard");
    }
};

ReactDOM.render(
    (
        <Provider store={store}>
            <Router history={history}>
                <Route path="/" component={App}>
                    <IndexRoute onEnter={authentication} />
                    <Route path="/signin" component={Authentication} />
                    <Route path="/signup" component={SignUp} />
                    <Route path="/dashboard" component={DashBoard} />
                </Route>
            </Router>
        </Provider>
    ),
    document.getElementById("main")
);
