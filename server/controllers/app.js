function* getQuotes() {
    this.body = { "quote": "quote" };
    this.status = 200;
}

module.exports = {
    getQuotes,
};
