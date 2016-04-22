import Immutable from "immutable";
import * as Constants from "../lib/constants";

const initialState = Immutable.Map({
    quotes: Immutable.List(),
    loading: false,
    error: null,
});

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case Constants.GET_QUOTES_REQUEST:
            return state.merge({
                loading: true,
            });
        case Constants.GET_QUOTES_SUCCESS:
            return state.merge({
                quotes: Immutable.List(action.data),
                loading: false,
                error: null,
            });
        default:
            return state;
    }
};
