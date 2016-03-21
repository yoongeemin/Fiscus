import React from "react";
import classnames from "classnames";

export default class Ticker extends React.Component {
    componentDidMount() {
        //const options = {
        //    height: 32,
        //    padding: 6
        //};
        //$(ReactDOM.findDOMNode(this)).vTicker(options);
    }

    render() {
        const quoteList = this.props.quotes.map((quote, index) => {
            const glyphicon = classnames("glyphicon",
                { "glyphicon-triangle-bottom": quote.dropped && quote.change !== 0.0 },
                { "glyphicon-triangle-top": !quote.dropped && quote.change !== 0.0 });

            return (
                <div key={index} className="display-table-cell">
                    {quote.name} <span className="ticker-price">{quote.price}</span> <span className={glyphicon}></span>{quote.change}%
                </div>
            );
        });

        const indiceList = quoteList.slice(0, 6);
        const currencyList = quoteList.slice(6, 14);
        const rateList = quoteList.slice(14, 21);

        return (
            <div id="tickers" className="bg-color-black fill-width">
                <ul className="fill-width">
                    <li className="display-table fill-width text-align-center">{indiceList}</li>
                    <li className="display-table fill-width text-align-center">{currencyList}</li>
                    <li className="display-table fill-width text-align-center">{rateList}</li>
                </ul>
            </div>
        );
    }
}

Ticker.propTypes = {
    quotes: React.PropTypes.object.isRequired,
};
