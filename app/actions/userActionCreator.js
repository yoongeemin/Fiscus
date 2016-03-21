import * as Constants from "../lib/constants";

export function signIn(credentials) {
    return dispatch => {
        dispatch({ type: Constants.SIGNIN_USER_REQUEST });

        $.ajax({
            type: Constants.POST,
            url: Constants.SIGNIN_API,
            data: credentials,
        }).done((response) => {
            dispatch({
                type: Constants.SIGNIN_USER_SUCCESS,
                data: response,
            });
        }).fail((xhr, status, error) => {
            dispatch({ type: Constants.SIGNIN_USER_FAILURE, error });
        });
    };
}

export function signOut() {
    return dispatch => {
        dispatch({ type: Constants.SIGNOUT_USER_REQUEST });

        $.ajax({
            type: Constants.GET,
            url: Constants.SIGNOUT_API,
        }).done(() => {
            dispatch({ type: Constants.SIGNOUT_USER_SUCCESS });
        }).fail((xhr, status, error) => {
            dispatch({ type: Constants.SIGNOUT_USER_FAILURE, error });
        });
    };
}

export function signUp(credentials) {
    return dispatch => {
        dispatch({ type: Constants.SIGNUP_USER_REQUEST });

        $.ajax({
            type: Constants.POST,
            url: Constants.SIGNUP_API,
            data: credentials,
        }).done(() => {
            dispatch({ type: Constants.SIGNUP_USER_SUCCESS });
            top.frames.location.reload(false);
        }).fail((xhr, status, error) => {
            dispatch({ type: Constants.SIGNUP_USER_FAILURE, error });
        });
    };
}

export function activateUser() {
    return dispatch => {
		dispatch({ type: Constants.ACTIVATE_USER_REQUEST });

        $.ajax({
            type: Constants.GET,
            url: Constants.ACTIVATE_API,
            data: credentials,
        }).done(() => {
            dispatch({ type: Constants.ACTIVATE_USER_SUCCESS });
            top.frames.location.reload(false);
        }).fail((xhr, status, error) => {
            dispatch({ type: Constants.ACTIVATE_USER_FAILURE, error });
        });
    };
}
