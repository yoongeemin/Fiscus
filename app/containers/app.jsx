import React from "react";
import Immutable from "immutable";
import { connect } from "react-redux";
import NavBar from "./navbar";

class App extends React.Component {
    static propTypes = {
        children: React.PropTypes.object,
        dispatch: React.PropTypes.func.isRequired,
        user: React.PropTypes.instanceOf(Immutable.Map).isRequired,
        userLoading: React.PropTypes.bool.isRequired,
        quotes: React.PropTypes.instanceOf(Immutable.List).isRequired,
        quotesLoading: React.PropTypes.bool.isRequired,
    };

    render() {
        return (
            <div id="app">
                <NavBar
                    user={this.props.user}
                    userLoading={this.props.userLoading}
                    quotes={this.props.quotes}
                    quotesLoading={this.props.quotesLoading}
                />
                {this.props.children}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.get("userReducer").get("user"),
        userLoading: state.get("userReducer").get("loading"),
        quotes: state.get("quoteReducer").get("quotes"),
        quotesLoading: state.get("quoteReducer").get("loading"),
    };
};

export default connect(mapStateToProps)(App);
