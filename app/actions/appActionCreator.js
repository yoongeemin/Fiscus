import * as Constants from "../lib/constants";

export function getQuotes() {
    return dispatch => {
        dispatch({ type: Constants.GET_QUOTES_REQUEST });

        $.ajax({
            url: Constants.QUOTE_API,
        }).done((response) => {
            dispatch({
                type: Constants.GET_QUOTES_SUCCESS,
                data: response,
            });
        }).fail((xhr, status, error) => {
            dispatch({
                type: Constants.GET_QUOTES_FAILURE,
                error,
            });
        });
    };
}
