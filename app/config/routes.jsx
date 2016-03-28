import { Router, Route, IndexRoute, browserHistory } from "react-router";
import { App, SignUp } from "./containers/index";
import { Authentication, DashBoard } from "./components/index";

export default (store) => {
    const authenticate = (nextState, replace, callback) => {
        const signedIn = !store.getState().userReducer.profile.isEmpty();
        if (!signedIn) {
            replace({
               pathname: "/signin",
               state: { nextPathname: nextState.location.pathname },
            });
        }
        callback();
    };

    const redirect = (nextState, replace, callback) => {
        const signedIn = !store.getState().userReducer.profile.isEmpty();
        if (signedIn) {
            replace({ pathname: "/" });
        }
        callback();
    };

    return {
        component: App,
        childRoutes: [
            {
                path: "/",
                component: Dashboard,
                // childRoutes: [
                //     {
                //         path: "ledger",
                //         component: Ledger,
                //     },
                //     {
                //         path: "analyzer",
                //         component: Analyzer,
                //     },
                // ],
            },
            {
                path: "/signin",
                component: Authentication,
                onEnter: redirect,
            },
            {
                path: "/signup",
                component: SignUp,
                onEnter: redirect,
            },
        ],
    };
};
