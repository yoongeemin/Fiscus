import { GET, POST } from "../lib/http";
import * as Constants from "../lib/constants";
import { getQuotes } from "./index";

export function authenticate() {
    return dispatch => {
        dispatch({ type: Constants.AUTHENTICATE_REQUEST });

        return GET(Constants.AUTHENTICATE_API)
            .then((response) => {
                return dispatch({
                    type: Constants.AUTHENTICATE_SUCCESS,
                    data: response.data,
                });
                //dispatch(getQuotes());
            })
            .catch((error) => {
                return dispatch({
                    type: Constants.AUTHENTICATE_FAILURE,
                    error,
                });
            });
    };
}

export function signIn(credentials) {
    return dispatch => {
        dispatch({ type: Constants.SIGNIN_USER_REQUEST });

        return POST(Constants.SIGNIN_API, credentials)
            .then((response) => {
                return dispatch({
                    type: Constants.SIGNIN_USER_SUCCESS,
                    data: response.data,
                });
            })
            .catch((error) => {
                return dispatch({
                    type: Constants.SIGNIN_USER_FAILURE,
                    error,
                });
            });
    };
}

export function signOut() {
    return dispatch => {
        dispatch({ type: Constants.SIGNOUT_USER_REQUEST });

        return GET(Constants.SIGNOUT_API)
            .then(() => {
                return dispatch({ type: Constants.SIGNOUT_USER_SUCCESS });
            })
            .catch((error) => {
                return dispatch({
                    type: Constants.SIGNOUT_USER_FAILURE,
                    error,
                });
            });
    };
}

export function signUp(credentials) {
    return dispatch => {
        dispatch({ type: Constants.SIGNUP_USER_REQUEST });

        return POST(Constants.SIGNUP_API, credentials)
            .then(() => {
                return dispatch({ type: Constants.SIGNUP_USER_SUCCESS });
            })
            .catch((error) => {
                return dispatch({
                    type: Constants.SIGNUP_USER_FAILURE,
                    error,
                });
            });
    };
}

export function activateUser() {
    return dispatch => {
        dispatch({ type: Constants.ACTIVATE_USER_REQUEST });

        GET(Constants.ACTIVATE_API)
            .then(() => {
                return dispatch({ type: Constants.ACTIVATE_USER_SUCCESS });
            })
            .catch((error) => {
                return dispatch({
                    type: Constants.ACTIVATE_USER_FAILURE,
                    error,
                });
            });
    };
}
