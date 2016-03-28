import "./styles/base/index";

import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";
import { syncHistoryWithStore } from "react-router-redux";
import reducers from "./reducers/index";
import { configureStore } from "./lib/redux";
import configureRoutes from "./config/routes";

const store = configureStore(reducers);
const routes = configureRoutes(store);
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    (
        <Provider store={store}>
            <Router history={history} routes={routes} />
        </Provider>
    ),
    document.getElementById("main")
);
