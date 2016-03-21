import Immutable from "immutable";
import * as Constants from "../lib/constants";

export default function(state = {
    profile: Immutable.Map(),
    loading: false,
    error: null,
}, action = null) {
    switch (action.type) {
        case Constants.SIGNIN_USER_REQUEST:
        case Constants.SIGNUP_USER_REQUEST:
        case Constants.SIGNOUT_USER_REQUEST:
        case Constants.ACTIVATE_USER_REQUEST:
            return Object.assign({}, state, {
                loading: true,
            });
        case Constants.SIGNIN_USER_SUCCESS:
            return Object.assign({}, state, {
                profile: Immutable.Map(action.data),
                loading: false,
                error: null,
            });
        case Constants.SIGNOUT_USER_SUCCESS:
            return Object.assign({}, state, {
                profile: Immutable.Map(),
                loading: false,
                error: null,
            });
        case Constants.SIGNUP_USER_SUCCESS:
        case Constants.ACTIVATE_USER_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                error: null,
            });
        case Constants.SIGNIN_USER_FAILURE:
        case Constants.SIGNOUT_USER_FAILURE:
        case Constants.SIGNUP_USER_FAILURE:
        case Constants.ACTIVATE_USER_FAILURE:
            return Object.assign({}, state, {
                loading: false,
                error: action.error,
            });
        default:
            return state;
    }
}
