import { GET } from "../lib/http";
import * as Constants from "../lib/constants";

export function getQuotes() {
    return dispatch => {
        dispatch({ type: Constants.GET_QUOTES_REQUEST });

        GET(Constants.QUOTE_API)
            .then((response) => {
                dispatch({
                    type: Constants.GET_QUOTES_SUCCESS,
                    data: response,
                });
            })
            .catch((error) => {
                dispatch({
                    type: Constants.GET_QUOTES_FAILURE,
                    error,
                });
            });
    };
}
