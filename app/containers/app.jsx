import React from "react";
import { connect } from "react-redux";
import NavBar from "./navbar";
import { authenticate } from "../actions/index";

class App extends React.Component {
    static propTypes = {
        children: React.PropTypes.object,
        dispatch: React.PropTypes.func.isRequired,
        user: React.PropTypes.object.isRequired,
        userLoading: React.PropTypes.bool.isRequired,
    };

    static init = [authenticate];

    render() {
        return (
            <div id="app">
                <NavBar
                    user={this.props.user}
                    userLoading={this.props.userLoading}
                />
                {this.props.children}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.userReducer.user,
        userLoading: state.userReducer.loading,
    };
};

export default connect(mapStateToProps)(App);
