import { GET, POST } from "../lib/http";
import * as Constants from "../lib/constants";

export function signIn(credentials) {
    return dispatch => {
        dispatch({ type: Constants.SIGNIN_USER_REQUEST });

        POST(Constants.SIGNIN_API, credentials)
            .then((response) => {
                dispatch({
                    type: Constants.SIGNIN_USER_SUCCESS,
                    data: response,
                });
            })
            .catch((error) => {
                dispatch({
                    type: Constants.SIGNIN_USER_FAILURE,
                    error,
                });
            });
    };
}

export function signOut() {
    return dispatch => {
        dispatch({ type: Constants.SIGNOUT_USER_REQUEST });

        GET(Constants.SIGNOUT_API)
            .then(() => {
                dispatch({ type: Constants.SIGNOUT_USER_SUCCESS });
            })
            .catch((error) => {
                dispatch({
                    type: Constants.SIGNOUT_USER_FAILURE,
                    error,
                });
            });
    };
}

export function signUp(credentials) {
    return dispatch => {
        dispatch({ type: Constants.SIGNUP_USER_REQUEST });

        POST(Constants.SIGNUP_API, credentials)
            .then(() => {
                dispatch({ type: Constants.SIGNUP_USER_SUCCESS });
            })
            .catch((error) => {
                dispatch({
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
                dispatch({ type: Constants.ACTIVATE_USER_SUCCESS });
            })
            .catch((error) => {
                dispatch({
                    type: Constants.ACTIVATE_USER_FAILURE,
                    error,
                });
            });
    };
}
