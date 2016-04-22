const _ = require("lodash");
const bluebird = require("bluebird");
const axios = require("axios");
const server = require("../config/server.json");

function parseQuotes(response) {
    return new bluebird((resolve) => {
        const quotes = [];

        const resources = response.data.list.resources;
        resources.forEach((obj, index) => {
            const fields = obj.resource.fields;
            const price = parseFloat(fields.price).toFixed(2);
            const change = parseFloat(fields.chg_percent).toFixed(2);
            const dropped = change.charAt(0) === "-";
            const name = server.yahoo.tickers[index].name;

            quotes.push({
                name,
                price,
                change: dropped ? -change : change,
                dropped,
            });
        });

        resolve(quotes);
    });
}

function* getQuotes() {
    const url = server.yahoo.url;
    const tickers = _.map(server.yahoo.tickers, "symbol").join(",");
    const options = _.reduce(server.yahoo.options, (result, value, key) => {
        return result.concat([`${key}=${value}`]);
    }, []).join("&");

    const yahoo = `${url}/${tickers}/quote/?${options}`;

    const response = yield axios.get(yahoo, {}, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
    });

    this.body = yield parseQuotes(response);
    this.status = 200;
}

module.exports = {
    getQuotes,
};
