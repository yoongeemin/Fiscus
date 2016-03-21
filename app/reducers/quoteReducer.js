import Immutable from "immutable";
import * as Constants from "../lib/constants";

const indiceNames = ["DJIA", "S&P500", "NASDAQ", "STOXX", "NIKKEI", "SSE", "US 10-Year"];
const futureNames = ["Crude Oil", "Natural Gas", "Gold", "Silver", "Corn"];
function parseData(data) {
    const quotes = [];
    let i = 0;
    let f = 0;
    data.forEach((obj) => {
        const fields = obj.resource.fields;
        const price = parseFloat(fields.price).toFixed(2);
        const change = parseFloat(fields.chg_percent).toFixed(2);
        const dropped = change.charAt(0) === "-";

        let name;
        switch (fields.type) {
            case "index":
                name = indiceNames[i];
                ++i;
                break;
            case "currency": {
                const splitted = fields.name.split("/");
                name = splitted[splitted.length - 1];
                break;
            }
            case "future":
                name = futureNames[f];
                ++f;
                break;
            default:
                break;
        }

        quotes.push({
            name,
            price,
            change: dropped ? -change : change,
            dropped,
        });
    });

    return quotes;
}

export default function(state = {
    quotes: Immutable.List(),
    loading: false,
    error: null,
}, action = null) {
    switch (action.type) {
        case Constants.GET_QUOTES_REQUEST:
            return Object.assign({}, state, {
                loading: true,
            });
        case Constants.GET_QUOTES_SUCCESS:
            return Object.assign({}, state, {
                quotes: Immutable.List(parseData(action.data)),
                loading: false,
                error: null,
            });
        default:
            return state;
    }
}
