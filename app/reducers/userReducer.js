import Immutable from "immutable";
import * as Constants from "../lib/constants";

const initialState = Immutable.Map({
    user: Immutable.Map(),
    loading: false,
    error: null,
});

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case Constants.AUTHENTICATE_REQUEST:
        case Constants.SIGNIN_USER_REQUEST:
        case Constants.SIGNUP_USER_REQUEST:
        case Constants.SIGNOUT_USER_REQUEST:
        case Constants.ACTIVATE_USER_REQUEST:
            return state.merge({
                loading: true,
            });
        case Constants.AUTHENTICATE_SUCCESS:
        case Constants.SIGNIN_USER_SUCCESS:
            return state.merge({
                user: Immutable.Map(action.data),
                loading: false,
                error: null,
            });
        case Constants.SIGNOUT_USER_SUCCESS:
            return state.merge({
                user: Immutable.Map(),
                loading: false,
                error: null,
            });
        case Constants.SIGNUP_USER_SUCCESS:
        case Constants.ACTIVATE_USER_SUCCESS:
            return state.merge({
                loading: false,
                error: null,
            });
        case Constants.AUTHENTICATE_FAILURE:
        case Constants.SIGNIN_USER_FAILURE:
        case Constants.SIGNOUT_USER_FAILURE:
        case Constants.SIGNUP_USER_FAILURE:
        case Constants.ACTIVATE_USER_FAILURE:
            return state.merge({
                loading: false,
                error: action.error,
            });
        default:
            return state;
    }
};
