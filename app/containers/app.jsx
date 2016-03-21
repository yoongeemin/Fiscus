import React from "react";
import { connect } from "react-redux";
import NavBar from "./navbar";
import { getQuotes } from "../actions/index";

class App extends React.Component {
    //componentDidMount() {
    //    this.props.dispatch(getQuotes());
    //}

    render() {
        return (
            <div id="app">
                <NavBar profile={this.props.profile} quotes={this.props.quotes} />
                {this.props.children}
            </div>
        );
    }
}

App.propTypes = {
    dispatch: React.PropTypes.func.isRequired,
    profile: React.PropTypes.object.isRequired,
    quotes: React.PropTypes.object.isRequired,
    children: React.PropTypes.object,
};

const mapStateToProps = (state) => {
    return {
        profile: state.userReducer.profile,
        quotes: state.quoteReducer.quotes,
	};
};

export default connect(mapStateToProps)(App);
